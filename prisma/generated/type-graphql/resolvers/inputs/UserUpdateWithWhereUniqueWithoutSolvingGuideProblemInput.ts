import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutSolvingGuideProblemInput } from "../inputs/UserUpdateWithoutSolvingGuideProblemInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutSolvingGuideProblemInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutSolvingGuideProblemInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutSolvingGuideProblemInput, {
    nullable: false
  })
  data!: UserUpdateWithoutSolvingGuideProblemInput;
}
