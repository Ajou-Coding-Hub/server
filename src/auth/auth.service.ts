import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { map, firstValueFrom } from 'rxjs';
import { UserService } from 'src/user/user.service';

export interface LoginResponse {
  token: string;
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
    try {
      const user = await this.userService.findOneByEmail(email);
      return {
        token: this.jwtService.sign({ userId: user.id }),
        profile: { email, name, hd, picture },
      };
    } catch (e) {
      const user = await this.userService.create({
        email,
        name,
      });
      return {
        token: this.jwtService.sign({ userId: user.id }),
        profile: { email, name, hd, picture },
      };
    }
  }
}
