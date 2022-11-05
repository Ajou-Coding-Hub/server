import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuideProblemWhereInput } from "../../../inputs/GuideProblemWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGuideProblemArgs {
  @TypeGraphQL.Field(_type => GuideProblemWhereInput, {
    nullable: true
  })
  where?: GuideProblemWhereInput | undefined;
}
