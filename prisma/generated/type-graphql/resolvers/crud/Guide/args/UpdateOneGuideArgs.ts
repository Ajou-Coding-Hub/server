import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuideUpdateInput } from "../../../inputs/GuideUpdateInput";
import { GuideWhereUniqueInput } from "../../../inputs/GuideWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGuideArgs {
  @TypeGraphQL.Field(_type => GuideUpdateInput, {
    nullable: false
  })
  data!: GuideUpdateInput;

  @TypeGraphQL.Field(_type => GuideWhereUniqueInput, {
    nullable: false
  })
  where!: GuideWhereUniqueInput;
}
