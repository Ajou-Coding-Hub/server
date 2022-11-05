import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemCreateWithoutGuideInput } from "../inputs/GuideProblemCreateWithoutGuideInput";
import { GuideProblemUpdateWithoutGuideInput } from "../inputs/GuideProblemUpdateWithoutGuideInput";
import { GuideProblemWhereUniqueInput } from "../inputs/GuideProblemWhereUniqueInput";

@TypeGraphQL.InputType("GuideProblemUpsertWithWhereUniqueWithoutGuideInput", {
  isAbstract: true
})
export class GuideProblemUpsertWithWhereUniqueWithoutGuideInput {
  @TypeGraphQL.Field(_type => GuideProblemWhereUniqueInput, {
    nullable: false
  })
  where!: GuideProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuideProblemUpdateWithoutGuideInput, {
    nullable: false
  })
  update!: GuideProblemUpdateWithoutGuideInput;

  @TypeGraphQL.Field(_type => GuideProblemCreateWithoutGuideInput, {
    nullable: false
  })
  create!: GuideProblemCreateWithoutGuideInput;
}
