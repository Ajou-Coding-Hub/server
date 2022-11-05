import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("GuideScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class GuideScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GuideScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GuideScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GuideScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GuideScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  ownerId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  level?: IntWithAggregatesFilter | undefined;
}
