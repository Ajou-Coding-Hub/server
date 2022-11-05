import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutSolvingGuideProblemInput } from "../inputs/UserCreateNestedManyWithoutSolvingGuideProblemInput";

@TypeGraphQL.InputType("GuideProblemCreateWithoutGuideInput", {
  isAbstract: true
})
export class GuideProblemCreateWithoutGuideInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  markdown!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isSolved!: boolean;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutSolvingGuideProblemInput, {
    nullable: true
  })
  solvingUser?: UserCreateNestedManyWithoutSolvingGuideProblemInput | undefined;
}
