import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGuideProblemArgs } from "./args/AggregateGuideProblemArgs";
import { GuideProblem } from "../../../models/GuideProblem";
import { AggregateGuideProblem } from "../../outputs/AggregateGuideProblem";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuideProblem)
export class AggregateGuideProblemResolver {
  @TypeGraphQL.Query(_returns => AggregateGuideProblem, {
    nullable: false
  })
  async aggregateGuideProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGuideProblemArgs): Promise<AggregateGuideProblem> {
    return getPrismaFromContext(ctx).guideProblem.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
