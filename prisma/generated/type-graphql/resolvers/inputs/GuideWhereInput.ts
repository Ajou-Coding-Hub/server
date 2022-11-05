import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemListRelationFilter } from "../inputs/GuideProblemListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("GuideWhereInput", {
  isAbstract: true
})
export class GuideWhereInput {
  @TypeGraphQL.Field(_type => [GuideWhereInput], {
    nullable: true
  })
  AND?: GuideWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideWhereInput], {
    nullable: true
  })
  OR?: GuideWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideWhereInput], {
    nullable: true
  })
  NOT?: GuideWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  owner?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  ownerId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  level?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => GuideProblemListRelationFilter, {
    nullable: true
  })
  guideProblems?: GuideProblemListRelationFilter | undefined;
}
