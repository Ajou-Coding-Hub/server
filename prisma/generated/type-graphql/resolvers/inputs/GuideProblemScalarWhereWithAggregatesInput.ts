import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("GuideProblemScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class GuideProblemScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GuideProblemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GuideProblemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GuideProblemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GuideProblemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  markdown?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  guideId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isSolved?: BoolWithAggregatesFilter | undefined;
}
