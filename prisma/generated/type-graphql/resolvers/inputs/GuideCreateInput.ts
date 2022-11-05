import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemCreateNestedManyWithoutGuideInput } from "../inputs/GuideProblemCreateNestedManyWithoutGuideInput";
import { UserCreateNestedOneWithoutOwnerGuideInput } from "../inputs/UserCreateNestedOneWithoutOwnerGuideInput";

@TypeGraphQL.InputType("GuideCreateInput", {
  isAbstract: true
})
export class GuideCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutOwnerGuideInput, {
    nullable: false
  })
  owner!: UserCreateNestedOneWithoutOwnerGuideInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  level!: number;

  @TypeGraphQL.Field(_type => GuideProblemCreateNestedManyWithoutGuideInput, {
    nullable: true
  })
  guideProblems?: GuideProblemCreateNestedManyWithoutGuideInput | undefined;
}
