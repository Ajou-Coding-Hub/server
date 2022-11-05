import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuideProblemUpdateInput } from "../../../inputs/GuideProblemUpdateInput";
import { GuideProblemWhereUniqueInput } from "../../../inputs/GuideProblemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGuideProblemArgs {
  @TypeGraphQL.Field(_type => GuideProblemUpdateInput, {
    nullable: false
  })
  data!: GuideProblemUpdateInput;

  @TypeGraphQL.Field(_type => GuideProblemWhereUniqueInput, {
    nullable: false
  })
  where!: GuideProblemWhereUniqueInput;
}
