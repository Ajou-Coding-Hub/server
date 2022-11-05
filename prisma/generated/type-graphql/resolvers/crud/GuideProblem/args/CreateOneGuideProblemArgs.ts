import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuideProblemCreateInput } from "../../../inputs/GuideProblemCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGuideProblemArgs {
  @TypeGraphQL.Field(_type => GuideProblemCreateInput, {
    nullable: false
  })
  data!: GuideProblemCreateInput;
}
