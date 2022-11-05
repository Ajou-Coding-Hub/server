import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideAvgOrderByAggregateInput } from "../inputs/GuideAvgOrderByAggregateInput";
import { GuideCountOrderByAggregateInput } from "../inputs/GuideCountOrderByAggregateInput";
import { GuideMaxOrderByAggregateInput } from "../inputs/GuideMaxOrderByAggregateInput";
import { GuideMinOrderByAggregateInput } from "../inputs/GuideMinOrderByAggregateInput";
import { GuideSumOrderByAggregateInput } from "../inputs/GuideSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GuideOrderByWithAggregationInput", {
  isAbstract: true
})
export class GuideOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ownerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  level?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GuideCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GuideCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuideAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GuideAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuideMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GuideMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuideMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GuideMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuideSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GuideSumOrderByAggregateInput | undefined;
}
