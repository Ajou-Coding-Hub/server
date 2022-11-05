import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuideOrderByWithRelationInput } from "../../../inputs/GuideOrderByWithRelationInput";
import { GuideWhereInput } from "../../../inputs/GuideWhereInput";
import { GuideWhereUniqueInput } from "../../../inputs/GuideWhereUniqueInput";
import { GuideScalarFieldEnum } from "../../../../enums/GuideScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstGuideArgs {
  @TypeGraphQL.Field(_type => GuideWhereInput, {
    nullable: true
  })
  where?: GuideWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuideOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GuideOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GuideWhereUniqueInput, {
    nullable: true
  })
  cursor?: GuideWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [GuideScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "ownerId" | "name" | "level"> | undefined;
}
