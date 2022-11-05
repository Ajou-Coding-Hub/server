import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutProjectInput } from "../inputs/UserCreateOrConnectWithoutProjectInput";
import { UserCreateWithoutProjectInput } from "../inputs/UserCreateWithoutProjectInput";
import { UserUpdateWithoutProjectInput } from "../inputs/UserUpdateWithoutProjectInput";
import { UserUpsertWithoutProjectInput } from "../inputs/UserUpsertWithoutProjectInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutProjectNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutProjectNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutProjectInput, {
    nullable: true
  })
  create?: UserCreateWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutProjectInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutProjectInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutProjectInput, {
    nullable: true
  })
  update?: UserUpdateWithoutProjectInput | undefined;
}
