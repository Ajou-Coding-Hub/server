import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideCreateNestedOneWithoutGuideProblemsInput } from "../inputs/GuideCreateNestedOneWithoutGuideProblemsInput";

@TypeGraphQL.InputType("GuideProblemCreateWithoutSolvingUserInput", {
  isAbstract: true
})
export class GuideProblemCreateWithoutSolvingUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  markdown!: string;

  @TypeGraphQL.Field(_type => GuideCreateNestedOneWithoutGuideProblemsInput, {
    nullable: false
  })
  Guide!: GuideCreateNestedOneWithoutGuideProblemsInput;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isSolved!: boolean;
}
