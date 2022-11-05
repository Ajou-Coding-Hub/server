import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutOwnerGuideNestedInput } from "../inputs/UserUpdateOneRequiredWithoutOwnerGuideNestedInput";

@TypeGraphQL.InputType("GuideUpdateWithoutGuideProblemsInput", {
  isAbstract: true
})
export class GuideUpdateWithoutGuideProblemsInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutOwnerGuideNestedInput, {
    nullable: true
  })
  owner?: UserUpdateOneRequiredWithoutOwnerGuideNestedInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  level?: IntFieldUpdateOperationsInput | undefined;
}
