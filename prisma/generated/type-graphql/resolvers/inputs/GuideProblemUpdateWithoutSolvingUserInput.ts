import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { GuideUpdateOneRequiredWithoutGuideProblemsNestedInput } from "../inputs/GuideUpdateOneRequiredWithoutGuideProblemsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GuideProblemUpdateWithoutSolvingUserInput", {
  isAbstract: true
})
export class GuideProblemUpdateWithoutSolvingUserInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  markdown?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GuideUpdateOneRequiredWithoutGuideProblemsNestedInput, {
    nullable: true
  })
  Guide?: GuideUpdateOneRequiredWithoutGuideProblemsNestedInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isSolved?: BoolFieldUpdateOperationsInput | undefined;
}
