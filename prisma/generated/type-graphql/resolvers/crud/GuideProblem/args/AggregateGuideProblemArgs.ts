import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuideProblemOrderByWithRelationInput } from "../../../inputs/GuideProblemOrderByWithRelationInput";
import { GuideProblemWhereInput } from "../../../inputs/GuideProblemWhereInput";
import { GuideProblemWhereUniqueInput } from "../../../inputs/GuideProblemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateGuideProblemArgs {
  @TypeGraphQL.Field(_type => GuideProblemWhereInput, {
    nullable: true
  })
  where?: GuideProblemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GuideProblemOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GuideProblemWhereUniqueInput, {
    nullable: true
  })
  cursor?: GuideProblemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
