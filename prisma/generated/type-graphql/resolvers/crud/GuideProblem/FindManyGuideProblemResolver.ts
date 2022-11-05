import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyGuideProblemArgs } from "./args/FindManyGuideProblemArgs";
import { GuideProblem } from "../../../models/GuideProblem";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuideProblem)
export class FindManyGuideProblemResolver {
  @TypeGraphQL.Query(_returns => [GuideProblem], {
    nullable: false
  })
  async guideProblems(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGuideProblemArgs): Promise<GuideProblem[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guideProblem.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
