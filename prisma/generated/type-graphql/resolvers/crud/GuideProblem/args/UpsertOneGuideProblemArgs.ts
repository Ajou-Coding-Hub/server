import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuideProblemCreateInput } from "../../../inputs/GuideProblemCreateInput";
import { GuideProblemUpdateInput } from "../../../inputs/GuideProblemUpdateInput";
import { GuideProblemWhereUniqueInput } from "../../../inputs/GuideProblemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneGuideProblemArgs {
  @TypeGraphQL.Field(_type => GuideProblemWhereUniqueInput, {
    nullable: false
  })
  where!: GuideProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuideProblemCreateInput, {
    nullable: false
  })
  create!: GuideProblemCreateInput;

  @TypeGraphQL.Field(_type => GuideProblemUpdateInput, {
    nullable: false
  })
  update!: GuideProblemUpdateInput;
}
