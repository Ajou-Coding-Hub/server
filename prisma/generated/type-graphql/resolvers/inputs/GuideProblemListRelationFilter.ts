import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemWhereInput } from "../inputs/GuideProblemWhereInput";

@TypeGraphQL.InputType("GuideProblemListRelationFilter", {
  isAbstract: true
})
export class GuideProblemListRelationFilter {
  @TypeGraphQL.Field(_type => GuideProblemWhereInput, {
    nullable: true
  })
  every?: GuideProblemWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuideProblemWhereInput, {
    nullable: true
  })
  some?: GuideProblemWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuideProblemWhereInput, {
    nullable: true
  })
  none?: GuideProblemWhereInput | undefined;
}
