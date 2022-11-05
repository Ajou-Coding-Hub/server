import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutOwnerGuideInput } from "../inputs/UserCreateOrConnectWithoutOwnerGuideInput";
import { UserCreateWithoutOwnerGuideInput } from "../inputs/UserCreateWithoutOwnerGuideInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutOwnerGuideInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutOwnerGuideInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutOwnerGuideInput, {
    nullable: true
  })
  create?: UserCreateWithoutOwnerGuideInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutOwnerGuideInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutOwnerGuideInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
