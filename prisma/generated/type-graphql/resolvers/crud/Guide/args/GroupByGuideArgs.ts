import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuideOrderByWithAggregationInput } from "../../../inputs/GuideOrderByWithAggregationInput";
import { GuideScalarWhereWithAggregatesInput } from "../../../inputs/GuideScalarWhereWithAggregatesInput";
import { GuideWhereInput } from "../../../inputs/GuideWhereInput";
import { GuideScalarFieldEnum } from "../../../../enums/GuideScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGuideArgs {
  @TypeGraphQL.Field(_type => GuideWhereInput, {
    nullable: true
  })
  where?: GuideWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuideOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GuideOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "ownerId" | "name" | "level">;

  @TypeGraphQL.Field(_type => GuideScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GuideScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
