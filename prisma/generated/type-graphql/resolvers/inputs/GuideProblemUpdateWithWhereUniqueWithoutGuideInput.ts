import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemUpdateWithoutGuideInput } from "../inputs/GuideProblemUpdateWithoutGuideInput";
import { GuideProblemWhereUniqueInput } from "../inputs/GuideProblemWhereUniqueInput";

@TypeGraphQL.InputType("GuideProblemUpdateWithWhereUniqueWithoutGuideInput", {
  isAbstract: true
})
export class GuideProblemUpdateWithWhereUniqueWithoutGuideInput {
  @TypeGraphQL.Field(_type => GuideProblemWhereUniqueInput, {
    nullable: false
  })
  where!: GuideProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuideProblemUpdateWithoutGuideInput, {
    nullable: false
  })
  data!: GuideProblemUpdateWithoutGuideInput;
}
