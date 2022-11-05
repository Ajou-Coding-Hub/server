import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideCreateNestedManyWithoutOwnerInput } from "../inputs/GuideCreateNestedManyWithoutOwnerInput";
import { GuideProblemCreateNestedManyWithoutSolvingUserInput } from "../inputs/GuideProblemCreateNestedManyWithoutSolvingUserInput";

@TypeGraphQL.InputType("UserCreateWithoutProjectInput", {
  isAbstract: true
})
export class UserCreateWithoutProjectInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => GuideCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  ownerGuide?: GuideCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => GuideProblemCreateNestedManyWithoutSolvingUserInput, {
    nullable: true
  })
  solvingGuideProblem?: GuideProblemCreateNestedManyWithoutSolvingUserInput | undefined;
}
