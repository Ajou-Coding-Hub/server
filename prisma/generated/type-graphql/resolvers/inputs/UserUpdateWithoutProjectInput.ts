import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemUpdateManyWithoutSolvingUserNestedInput } from "../inputs/GuideProblemUpdateManyWithoutSolvingUserNestedInput";
import { GuideUpdateManyWithoutOwnerNestedInput } from "../inputs/GuideUpdateManyWithoutOwnerNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UserUpdateWithoutProjectInput", {
  isAbstract: true
})
export class UserUpdateWithoutProjectInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GuideUpdateManyWithoutOwnerNestedInput, {
    nullable: true
  })
  ownerGuide?: GuideUpdateManyWithoutOwnerNestedInput | undefined;

  @TypeGraphQL.Field(_type => GuideProblemUpdateManyWithoutSolvingUserNestedInput, {
    nullable: true
  })
  solvingGuideProblem?: GuideProblemUpdateManyWithoutSolvingUserNestedInput | undefined;
}
