import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuideCreateManyInput } from "../../../inputs/GuideCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyGuideArgs {
  @TypeGraphQL.Field(_type => [GuideCreateManyInput], {
    nullable: false
  })
  data!: GuideCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
