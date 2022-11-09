import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
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
  ) {}

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
    if (!hd.includes('ajou.ac.kr')) throw ForbiddenException;
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
