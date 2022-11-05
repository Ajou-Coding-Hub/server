import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuideCreateInput } from "../../../inputs/GuideCreateInput";
import { GuideUpdateInput } from "../../../inputs/GuideUpdateInput";
import { GuideWhereUniqueInput } from "../../../inputs/GuideWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneGuideArgs {
  @TypeGraphQL.Field(_type => GuideWhereUniqueInput, {
    nullable: false
  })
  where!: GuideWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuideCreateInput, {
    nullable: false
  })
  create!: GuideCreateInput;

  @TypeGraphQL.Field(_type => GuideUpdateInput, {
    nullable: false
  })
  update!: GuideUpdateInput;
}
