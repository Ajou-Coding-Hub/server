import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutProjectNestedInput } from "../inputs/UserUpdateOneRequiredWithoutProjectNestedInput";

@TypeGraphQL.InputType("ProjectUpdateInput", {
  isAbstract: true
})
export class ProjectUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  projectName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutProjectNestedInput, {
    nullable: true
  })
  owner?: UserUpdateOneRequiredWithoutProjectNestedInput | undefined;
}
