import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuideWhereInput } from "../../../inputs/GuideWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGuideArgs {
  @TypeGraphQL.Field(_type => GuideWhereInput, {
    nullable: true
  })
  where?: GuideWhereInput | undefined;
}
