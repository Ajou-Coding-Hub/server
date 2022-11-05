import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutOwnerGuideInput } from "../inputs/UserCreateWithoutOwnerGuideInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutOwnerGuideInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutOwnerGuideInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutOwnerGuideInput, {
    nullable: false
  })
  create!: UserCreateWithoutOwnerGuideInput;
}
