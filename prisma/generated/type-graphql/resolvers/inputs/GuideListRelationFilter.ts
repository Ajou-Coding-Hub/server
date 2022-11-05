import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideWhereInput } from "../inputs/GuideWhereInput";

@TypeGraphQL.InputType("GuideListRelationFilter", {
  isAbstract: true
})
export class GuideListRelationFilter {
  @TypeGraphQL.Field(_type => GuideWhereInput, {
    nullable: true
  })
  every?: GuideWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuideWhereInput, {
    nullable: true
  })
  some?: GuideWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuideWhereInput, {
    nullable: true
  })
  none?: GuideWhereInput | undefined;
}
