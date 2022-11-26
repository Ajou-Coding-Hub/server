import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Github } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { map, firstValueFrom } from 'rxjs';
import { UserService } from 'src/user/user.service';

export interface LoginResponse {
  token: string;
  refreshToken: string;
  profile: {
    email: string;
    name: string;
    hd: string;
    picture: string;
  };
}

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly httpService: HttpService,
    private readonly userService: UserService,
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}

  async createGithubAccessToken(userId: number, code: string): Promise<Github> {
    try {
      const githubToken = await firstValueFrom(
        this.httpService
          .get('https://github.com/login/oauth/access_token', {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            params: {
              client_id: process.env.GITHUB_OAUTH_CLIENT_ID,
              client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
              code,
            },
          })
          .pipe(
            map(
              ({ data }: { data: Record<'access_token' | 'scope', string> }) =>
                data,
            ),
          ),
      );

      if (
        (githubToken as Record<string, unknown>).hasOwnProperty(
          'error_description',
        )
      ) {
        throw githubToken;
      }

      const userData = await firstValueFrom(
        this.httpService
          .get('https://api.github.com/user', {
            headers: {
              Authorization: `Bearer ${githubToken.access_token}`,
            },
          })
          .pipe(
            map(({ data }: { data: Record<'login' | 'email', string> }) => {
              return {
                username: data.login,
                email: data.email,
              };
            }),
          ),
      );

      const payload = {
        accessToken: githubToken.access_token,
        scope: githubToken.scope,
        email: userData.email,
        username: userData.username,
        userId,
      };
      const githubData = await this.prisma.github.upsert({
        where: {
          userId,
        },
        update: payload,
        create: payload,
      });
      return githubData;
    } catch (e) {
      throw e;
    }
  }

  async createRefreshToken(userId: number): Promise<string> {
    return this.jwtService.sign(
      { userId },
      { secret: '1234refresh', expiresIn: '1w' },
    );
  }

  async createAccessToken(userId: number): Promise<string> {
    return this.jwtService.sign({ userId });
  }

  async login(accessToken: string): Promise<LoginResponse> {
    const { email, name, hd, picture } = await firstValueFrom(
      this.httpService
        .get('https://www.googleapis.com/oauth2/v3/tokeninfo', {
          params: {
            id_token: accessToken,
          },
        })
        .pipe(
          map(async (response) => {
            return response.data;
          }),
        ),
    );

    let user = null;
    try {
      user = await this.userService.findOneByEmail(email);
    } catch (e) {
      user = await this.userService.create({
        email,
        name,
      });
    }

    return {
      token: await this.createAccessToken(user.id),
      refreshToken: await this.createRefreshToken(user.id),
      profile: { email, name, hd, picture },
    };
  }
}
