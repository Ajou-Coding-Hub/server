import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideAvgAggregate } from "../outputs/GuideAvgAggregate";
import { GuideCountAggregate } from "../outputs/GuideCountAggregate";
import { GuideMaxAggregate } from "../outputs/GuideMaxAggregate";
import { GuideMinAggregate } from "../outputs/GuideMinAggregate";
import { GuideSumAggregate } from "../outputs/GuideSumAggregate";

@TypeGraphQL.ObjectType("GuideGroupBy", {
  isAbstract: true
})
export class GuideGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ownerId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  level!: number;

  @TypeGraphQL.Field(_type => GuideCountAggregate, {
    nullable: true
  })
  _count!: GuideCountAggregate | null;

  @TypeGraphQL.Field(_type => GuideAvgAggregate, {
    nullable: true
  })
  _avg!: GuideAvgAggregate | null;

  @TypeGraphQL.Field(_type => GuideSumAggregate, {
    nullable: true
  })
  _sum!: GuideSumAggregate | null;

  @TypeGraphQL.Field(_type => GuideMinAggregate, {
    nullable: true
  })
  _min!: GuideMinAggregate | null;

  @TypeGraphQL.Field(_type => GuideMaxAggregate, {
    nullable: true
  })
  _max!: GuideMaxAggregate | null;
}
