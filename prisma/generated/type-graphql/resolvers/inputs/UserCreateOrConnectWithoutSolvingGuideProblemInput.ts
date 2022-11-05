import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSolvingGuideProblemInput } from "../inputs/UserCreateWithoutSolvingGuideProblemInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutSolvingGuideProblemInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutSolvingGuideProblemInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSolvingGuideProblemInput, {
    nullable: false
  })
  create!: UserCreateWithoutSolvingGuideProblemInput;
}
