import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutProjectInput } from "../inputs/UserCreateNestedOneWithoutProjectInput";

@TypeGraphQL.InputType("ProjectCreateInput", {
  isAbstract: true
})
export class ProjectCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  projectName!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProjectInput, {
    nullable: false
  })
  owner!: UserCreateNestedOneWithoutProjectInput;
}
