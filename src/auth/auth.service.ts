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
              Accecpt: 'application/json',
            },
            params: {
              cient_id: this.config.get('GITHUB_OAUTH_CLIENT_ID'),
              client_secret: this.config.get('GITHUB_OAUTH_CLIENT_SECRET'),
              code,
            },
          })
          .pipe(
            map(
              ({ data }: { data: Record<'accessToken' | 'scope', string> }) =>
                data,
            ),
          ),
      );
      const userData = await firstValueFrom(
        this.httpService
          .get('https://api.github.com/user', {
            headers: {
              Authorization: `Bearer ${githubToken.accessToken}`,
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

      const githubData = await this.prisma.github.create({
        data: {
          accessToken: githubToken.accessToken,
          scope: githubToken.scope,
          email: userData.email,
          username: userData.username,
          userId,
        },
      });
      return githubData;
    } catch (e) {
      throw e;
    }
  }

  async getRefreshToken(userId: number): Promise<string> {
    return this.jwtService.sign(
      { userId },
      { secret: '1234refresh', expiresIn: '1w' },
    );
  }
  async getToken(userId: number): Promise<string> {
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
      token: await this.getToken(user.id),
      refreshToken: await this.getRefreshToken(user.id),
      profile: { email, name, hd, picture },
    };
  }
}
