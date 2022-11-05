import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuideProblemCreateManyInput } from "../../../inputs/GuideProblemCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyGuideProblemArgs {
  @TypeGraphQL.Field(_type => [GuideProblemCreateManyInput], {
    nullable: false
  })
  data!: GuideProblemCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
