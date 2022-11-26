import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  create(user: UserDto) {
    return this.prisma.user.create({
      data: user,
    });
  }

  findAll() {
    const users = this.prisma.user.findMany();
    return users;
  }

  findOne(id: number) {
    const user = this.prisma.user.findUniqueOrThrow({
      where: { id },
    });
    return user;
  }

  findOneByEmail(email: string) {
    const user = this.prisma.user.findUniqueOrThrow({
      where: { email },
    });
    return user;
  }

  findOneByIdForGithub(id: number) {
    const github = this.prisma.github.findUniqueOrThrow({
      where: { userId: id },
    });
    return github;
  }
}
