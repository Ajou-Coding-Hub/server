import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuideCreateInput } from "../../../inputs/GuideCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGuideArgs {
  @TypeGraphQL.Field(_type => GuideCreateInput, {
    nullable: false
  })
  data!: GuideCreateInput;
}
