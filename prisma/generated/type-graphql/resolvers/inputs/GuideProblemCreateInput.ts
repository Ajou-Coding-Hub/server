import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideCreateNestedOneWithoutGuideProblemsInput } from "../inputs/GuideCreateNestedOneWithoutGuideProblemsInput";
import { UserCreateNestedManyWithoutSolvingGuideProblemInput } from "../inputs/UserCreateNestedManyWithoutSolvingGuideProblemInput";

@TypeGraphQL.InputType("GuideProblemCreateInput", {
  isAbstract: true
})
export class GuideProblemCreateInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutSolvingGuideProblemInput, {
    nullable: true
  })
  solvingUser?: UserCreateNestedManyWithoutSolvingGuideProblemInput | undefined;
}
