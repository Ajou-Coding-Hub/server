import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { firstValueFrom, map } from 'rxjs';
import { UserDto } from './dto/user.dto';
import { GithubRepository } from './types';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}

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

  async findOneByIdForGithub(id: number) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { accessToken, ...rest } = await this.prisma.github.findUniqueOrThrow(
      {
        where: { userId: id },
      },
    );
    return rest;
  }

  async getRepositories(id: number) {
    const github = await this.prisma.github.findUniqueOrThrow({
      where: { userId: id },
    });
    const repositories = await firstValueFrom<GithubRepository[]>(
      this.httpService
        .get('https://api.github.com/user/repos', {
          headers: {
            Authorization: `Bearer ${github.accessToken}`,
          },
        })
        .pipe(map(({ data }) => data)),
    );
    return repositories;
  }
}
