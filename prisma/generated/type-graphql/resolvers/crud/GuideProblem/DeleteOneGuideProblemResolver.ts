import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneGuideProblemArgs } from "./args/DeleteOneGuideProblemArgs";
import { GuideProblem } from "../../../models/GuideProblem";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuideProblem)
export class DeleteOneGuideProblemResolver {
  @TypeGraphQL.Mutation(_returns => GuideProblem, {
    nullable: true
  })
  async deleteOneGuideProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneGuideProblemArgs): Promise<GuideProblem | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guideProblem.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
