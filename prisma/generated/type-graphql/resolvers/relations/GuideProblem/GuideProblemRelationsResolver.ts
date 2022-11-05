import * as TypeGraphQL from "type-graphql";
import { Guide } from "../../../models/Guide";
import { GuideProblem } from "../../../models/GuideProblem";
import { User } from "../../../models/User";
import { GuideProblemSolvingUserArgs } from "./args/GuideProblemSolvingUserArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuideProblem)
export class GuideProblemRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Guide, {
    nullable: false
  })
  async Guide(@TypeGraphQL.Root() guideProblem: GuideProblem, @TypeGraphQL.Ctx() ctx: any): Promise<Guide> {
    return getPrismaFromContext(ctx).guideProblem.findUnique({
      where: {
        id: guideProblem.id,
      },
    }).Guide({});
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async solvingUser(@TypeGraphQL.Root() guideProblem: GuideProblem, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GuideProblemSolvingUserArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).guideProblem.findUnique({
      where: {
        id: guideProblem.id,
      },
    }).solvingUser(args);
  }
}
