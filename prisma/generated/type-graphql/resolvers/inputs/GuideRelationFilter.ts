import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideWhereInput } from "../inputs/GuideWhereInput";

@TypeGraphQL.InputType("GuideRelationFilter", {
  isAbstract: true
})
export class GuideRelationFilter {
  @TypeGraphQL.Field(_type => GuideWhereInput, {
    nullable: true
  })
  is?: GuideWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuideWhereInput, {
    nullable: true
  })
  isNot?: GuideWhereInput | undefined;
}
