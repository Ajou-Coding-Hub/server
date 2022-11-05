import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuideProblemUpdateManyMutationInput } from "../../../inputs/GuideProblemUpdateManyMutationInput";
import { GuideProblemWhereInput } from "../../../inputs/GuideProblemWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGuideProblemArgs {
  @TypeGraphQL.Field(_type => GuideProblemUpdateManyMutationInput, {
    nullable: false
  })
  data!: GuideProblemUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GuideProblemWhereInput, {
    nullable: true
  })
  where?: GuideProblemWhereInput | undefined;
}
