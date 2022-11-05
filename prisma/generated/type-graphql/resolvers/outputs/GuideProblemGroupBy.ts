import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemAvgAggregate } from "../outputs/GuideProblemAvgAggregate";
import { GuideProblemCountAggregate } from "../outputs/GuideProblemCountAggregate";
import { GuideProblemMaxAggregate } from "../outputs/GuideProblemMaxAggregate";
import { GuideProblemMinAggregate } from "../outputs/GuideProblemMinAggregate";
import { GuideProblemSumAggregate } from "../outputs/GuideProblemSumAggregate";

@TypeGraphQL.ObjectType("GuideProblemGroupBy", {
  isAbstract: true
})
export class GuideProblemGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  markdown!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  guideId!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isSolved!: boolean;

  @TypeGraphQL.Field(_type => GuideProblemCountAggregate, {
    nullable: true
  })
  _count!: GuideProblemCountAggregate | null;

  @TypeGraphQL.Field(_type => GuideProblemAvgAggregate, {
    nullable: true
  })
  _avg!: GuideProblemAvgAggregate | null;

  @TypeGraphQL.Field(_type => GuideProblemSumAggregate, {
    nullable: true
  })
  _sum!: GuideProblemSumAggregate | null;

  @TypeGraphQL.Field(_type => GuideProblemMinAggregate, {
    nullable: true
  })
  _min!: GuideProblemMinAggregate | null;

  @TypeGraphQL.Field(_type => GuideProblemMaxAggregate, {
    nullable: true
  })
  _max!: GuideProblemMaxAggregate | null;
}
