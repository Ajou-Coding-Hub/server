import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemUpdateManyWithoutSolvingUserNestedInput } from "../inputs/GuideProblemUpdateManyWithoutSolvingUserNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProjectUpdateManyWithoutOwnerNestedInput } from "../inputs/ProjectUpdateManyWithoutOwnerNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UserUpdateWithoutOwnerGuideInput", {
  isAbstract: true
})
export class UserUpdateWithoutOwnerGuideInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateManyWithoutOwnerNestedInput, {
    nullable: true
  })
  Project?: ProjectUpdateManyWithoutOwnerNestedInput | undefined;

  @TypeGraphQL.Field(_type => GuideProblemUpdateManyWithoutSolvingUserNestedInput, {
    nullable: true
  })
  solvingGuideProblem?: GuideProblemUpdateManyWithoutSolvingUserNestedInput | undefined;
}
