import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { GuideRelationFilter } from "../inputs/GuideRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@TypeGraphQL.InputType("GuideProblemWhereInput", {
  isAbstract: true
})
export class GuideProblemWhereInput {
  @TypeGraphQL.Field(_type => [GuideProblemWhereInput], {
    nullable: true
  })
  AND?: GuideProblemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemWhereInput], {
    nullable: true
  })
  OR?: GuideProblemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemWhereInput], {
    nullable: true
  })
  NOT?: GuideProblemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  markdown?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => GuideRelationFilter, {
    nullable: true
  })
  Guide?: GuideRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  guideId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isSolved?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  solvingUser?: UserListRelationFilter | undefined;
}
