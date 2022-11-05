import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { VscodeGateway } from './vscode/vscode.gateway';
import { GuideResolvers } from './guide/guide.resolvers';
import { GuideProblemRelationsResolver } from 'prisma/generated/type-graphql';
import { TypeGraphQLModule } from 'typegraphql-nestjs';
import path from 'path';
import { PrismaClient } from '@prisma/client';

interface Context {
  prisma: PrismaClient;
}

@Module({
  imports: [
    TypeGraphQLModule.forRoot({
      path: '/graphql',
      emitSchemaFile: path.resolve(__dirname, './generated-schema.graphql'),
      validate: false,
      context: (): Context => ({ prisma: new PrismaClient() }),
    }),
    AuthModule,
  ],
  providers: [VscodeGateway, GuideResolvers, GuideProblemRelationsResolver],
})
export class AppModule {}
