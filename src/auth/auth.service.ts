import { Injectable } from '@nestjs/common';
import prisma from 'src/db/db';

import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  googleLogin(req) {
    console.log('googleLogin', req.user);
    if (!req.user) {
      return 'No user from google';
    }

    return {
      user: req.user,
    };
  }

  async findAll() {
    const users = await prisma.user.findMany();
    return users;
  }

  async findOne(id: number) {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  }

  async findOneByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
