import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuideProblemOrderByWithAggregationInput } from "../../../inputs/GuideProblemOrderByWithAggregationInput";
import { GuideProblemScalarWhereWithAggregatesInput } from "../../../inputs/GuideProblemScalarWhereWithAggregatesInput";
import { GuideProblemWhereInput } from "../../../inputs/GuideProblemWhereInput";
import { GuideProblemScalarFieldEnum } from "../../../../enums/GuideProblemScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGuideProblemArgs {
  @TypeGraphQL.Field(_type => GuideProblemWhereInput, {
    nullable: true
  })
  where?: GuideProblemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GuideProblemOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "markdown" | "guideId" | "isSolved">;

  @TypeGraphQL.Field(_type => GuideProblemScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GuideProblemScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
