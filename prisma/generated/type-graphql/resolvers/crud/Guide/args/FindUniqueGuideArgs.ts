import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuideWhereUniqueInput } from "../../../inputs/GuideWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueGuideArgs {
  @TypeGraphQL.Field(_type => GuideWhereUniqueInput, {
    nullable: false
  })
  where!: GuideWhereUniqueInput;
}
