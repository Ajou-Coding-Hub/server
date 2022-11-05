import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Guide } from "../models/Guide";
import { User } from "../models/User";
import { GuideProblemCount } from "../resolvers/outputs/GuideProblemCount";

@TypeGraphQL.ObjectType("GuideProblem", {
  isAbstract: true
})
export class GuideProblem {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  markdown!: string;

  Guide?: Guide;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  guideId!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isSolved!: boolean;

  solvingUser?: User[];

  @TypeGraphQL.Field(_type => GuideProblemCount, {
    nullable: true
  })
  _count?: GuideProblemCount | null;
}
