import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideOrderByRelationAggregateInput } from "../inputs/GuideOrderByRelationAggregateInput";
import { GuideProblemOrderByRelationAggregateInput } from "../inputs/GuideProblemOrderByRelationAggregateInput";
import { ProjectOrderByRelationAggregateInput } from "../inputs/ProjectOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProjectOrderByRelationAggregateInput, {
    nullable: true
  })
  Project?: ProjectOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuideOrderByRelationAggregateInput, {
    nullable: true
  })
  ownerGuide?: GuideOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuideProblemOrderByRelationAggregateInput, {
    nullable: true
  })
  solvingGuideProblem?: GuideProblemOrderByRelationAggregateInput | undefined;
}
