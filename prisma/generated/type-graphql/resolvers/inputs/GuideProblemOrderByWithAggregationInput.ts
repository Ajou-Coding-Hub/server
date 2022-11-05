import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemAvgOrderByAggregateInput } from "../inputs/GuideProblemAvgOrderByAggregateInput";
import { GuideProblemCountOrderByAggregateInput } from "../inputs/GuideProblemCountOrderByAggregateInput";
import { GuideProblemMaxOrderByAggregateInput } from "../inputs/GuideProblemMaxOrderByAggregateInput";
import { GuideProblemMinOrderByAggregateInput } from "../inputs/GuideProblemMinOrderByAggregateInput";
import { GuideProblemSumOrderByAggregateInput } from "../inputs/GuideProblemSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GuideProblemOrderByWithAggregationInput", {
  isAbstract: true
})
export class GuideProblemOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  markdown?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  guideId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isSolved?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GuideProblemCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GuideProblemCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuideProblemAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GuideProblemAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuideProblemMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GuideProblemMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuideProblemMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GuideProblemMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuideProblemSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GuideProblemSumOrderByAggregateInput | undefined;
}
