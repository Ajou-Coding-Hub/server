import * as TypeGraphQL from "type-graphql";
import { Guide } from "../../../models/Guide";
import { GuideProblem } from "../../../models/GuideProblem";
import { Project } from "../../../models/Project";
import { User } from "../../../models/User";
import { UserOwnerGuideArgs } from "./args/UserOwnerGuideArgs";
import { UserProjectArgs } from "./args/UserProjectArgs";
import { UserSolvingGuideProblemArgs } from "./args/UserSolvingGuideProblemArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Project], {
    nullable: false
  })
  async Project(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserProjectArgs): Promise<Project[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Project(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Guide], {
    nullable: false
  })
  async ownerGuide(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserOwnerGuideArgs): Promise<Guide[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).ownerGuide(args);
  }

  @TypeGraphQL.FieldResolver(_type => [GuideProblem], {
    nullable: false
  })
  async solvingGuideProblem(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserSolvingGuideProblemArgs): Promise<GuideProblem[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).solvingGuideProblem(args);
  }
}
