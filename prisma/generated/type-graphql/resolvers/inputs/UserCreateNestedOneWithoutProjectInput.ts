import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutProjectInput } from "../inputs/UserCreateOrConnectWithoutProjectInput";
import { UserCreateWithoutProjectInput } from "../inputs/UserCreateWithoutProjectInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutProjectInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutProjectInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutProjectInput, {
    nullable: true
  })
  create?: UserCreateWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutProjectInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
