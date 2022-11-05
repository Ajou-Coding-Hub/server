import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSolvingGuideProblemInput } from "../inputs/UserCreateWithoutSolvingGuideProblemInput";
import { UserUpdateWithoutSolvingGuideProblemInput } from "../inputs/UserUpdateWithoutSolvingGuideProblemInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutSolvingGuideProblemInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutSolvingGuideProblemInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutSolvingGuideProblemInput, {
    nullable: false
  })
  update!: UserUpdateWithoutSolvingGuideProblemInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSolvingGuideProblemInput, {
    nullable: false
  })
  create!: UserCreateWithoutSolvingGuideProblemInput;
}
