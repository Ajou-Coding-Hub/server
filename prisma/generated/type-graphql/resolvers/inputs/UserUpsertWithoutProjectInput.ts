import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutProjectInput } from "../inputs/UserCreateWithoutProjectInput";
import { UserUpdateWithoutProjectInput } from "../inputs/UserUpdateWithoutProjectInput";

@TypeGraphQL.InputType("UserUpsertWithoutProjectInput", {
  isAbstract: true
})
export class UserUpsertWithoutProjectInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: UserUpdateWithoutProjectInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutProjectInput, {
    nullable: false
  })
  create!: UserCreateWithoutProjectInput;
}
