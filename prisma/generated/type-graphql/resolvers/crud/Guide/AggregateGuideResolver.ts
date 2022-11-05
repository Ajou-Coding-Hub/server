import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGuideArgs } from "./args/AggregateGuideArgs";
import { Guide } from "../../../models/Guide";
import { AggregateGuide } from "../../outputs/AggregateGuide";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Guide)
export class AggregateGuideResolver {
  @TypeGraphQL.Query(_returns => AggregateGuide, {
    nullable: false
  })
  async aggregateGuide(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGuideArgs): Promise<AggregateGuide> {
    return getPrismaFromContext(ctx).guide.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
