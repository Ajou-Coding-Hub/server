import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemUpdateManyWithoutGuideNestedInput } from "../inputs/GuideProblemUpdateManyWithoutGuideNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GuideUpdateWithoutOwnerInput", {
  isAbstract: true
})
export class GuideUpdateWithoutOwnerInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  level?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GuideProblemUpdateManyWithoutGuideNestedInput, {
    nullable: true
  })
  guideProblems?: GuideProblemUpdateManyWithoutGuideNestedInput | undefined;
}
