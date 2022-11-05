import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemCreateWithoutGuideInput } from "../inputs/GuideProblemCreateWithoutGuideInput";
import { GuideProblemWhereUniqueInput } from "../inputs/GuideProblemWhereUniqueInput";

@TypeGraphQL.InputType("GuideProblemCreateOrConnectWithoutGuideInput", {
  isAbstract: true
})
export class GuideProblemCreateOrConnectWithoutGuideInput {
  @TypeGraphQL.Field(_type => GuideProblemWhereUniqueInput, {
    nullable: false
  })
  where!: GuideProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuideProblemCreateWithoutGuideInput, {
    nullable: false
  })
  create!: GuideProblemCreateWithoutGuideInput;
}
