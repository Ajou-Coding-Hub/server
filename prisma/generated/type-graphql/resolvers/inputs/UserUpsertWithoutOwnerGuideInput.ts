import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutOwnerGuideInput } from "../inputs/UserCreateWithoutOwnerGuideInput";
import { UserUpdateWithoutOwnerGuideInput } from "../inputs/UserUpdateWithoutOwnerGuideInput";

@TypeGraphQL.InputType("UserUpsertWithoutOwnerGuideInput", {
  isAbstract: true
})
export class UserUpsertWithoutOwnerGuideInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutOwnerGuideInput, {
    nullable: false
  })
  update!: UserUpdateWithoutOwnerGuideInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutOwnerGuideInput, {
    nullable: false
  })
  create!: UserCreateWithoutOwnerGuideInput;
}
