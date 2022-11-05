import * as TypeGraphQL from "type-graphql";
import { Guide } from "../../../models/Guide";
import { GuideProblem } from "../../../models/GuideProblem";
import { User } from "../../../models/User";
import { GuideGuideProblemsArgs } from "./args/GuideGuideProblemsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Guide)
export class GuideRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() guide: Guide, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).guide.findUnique({
      where: {
        id: guide.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => [GuideProblem], {
    nullable: false
  })
  async guideProblems(@TypeGraphQL.Root() guide: Guide, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GuideGuideProblemsArgs): Promise<GuideProblem[]> {
    return getPrismaFromContext(ctx).guide.findUnique({
      where: {
        id: guide.id,
      },
    }).guideProblems(args);
  }
}
