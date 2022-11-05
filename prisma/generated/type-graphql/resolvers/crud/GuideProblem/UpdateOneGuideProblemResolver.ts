import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneGuideProblemArgs } from "./args/UpdateOneGuideProblemArgs";
import { GuideProblem } from "../../../models/GuideProblem";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuideProblem)
export class UpdateOneGuideProblemResolver {
  @TypeGraphQL.Mutation(_returns => GuideProblem, {
    nullable: true
  })
  async updateOneGuideProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneGuideProblemArgs): Promise<GuideProblem | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guideProblem.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
