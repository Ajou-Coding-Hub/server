import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { GuideProblem } from "../models/GuideProblem";
import { User } from "../models/User";
import { GuideCount } from "../resolvers/outputs/GuideCount";

@TypeGraphQL.ObjectType("Guide", {
  isAbstract: true
})
export class Guide {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  owner?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ownerId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  level!: number;

  guideProblems?: GuideProblem[];

  @TypeGraphQL.Field(_type => GuideCount, {
    nullable: true
  })
  _count?: GuideCount | null;
}
