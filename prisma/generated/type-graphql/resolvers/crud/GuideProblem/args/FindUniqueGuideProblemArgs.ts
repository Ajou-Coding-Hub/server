import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuideProblemWhereUniqueInput } from "../../../inputs/GuideProblemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueGuideProblemArgs {
  @TypeGraphQL.Field(_type => GuideProblemWhereUniqueInput, {
    nullable: false
  })
  where!: GuideProblemWhereUniqueInput;
}
