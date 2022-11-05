import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutSolvingGuideProblemNestedInput } from "../inputs/UserUpdateManyWithoutSolvingGuideProblemNestedInput";

@TypeGraphQL.InputType("GuideProblemUpdateWithoutGuideInput", {
  isAbstract: true
})
export class GuideProblemUpdateWithoutGuideInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  markdown?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isSolved?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutSolvingGuideProblemNestedInput, {
    nullable: true
  })
  solvingUser?: UserUpdateManyWithoutSolvingGuideProblemNestedInput | undefined;
}
