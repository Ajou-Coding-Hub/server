import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuideUpdateManyMutationInput } from "../../../inputs/GuideUpdateManyMutationInput";
import { GuideWhereInput } from "../../../inputs/GuideWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGuideArgs {
  @TypeGraphQL.Field(_type => GuideUpdateManyMutationInput, {
    nullable: false
  })
  data!: GuideUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GuideWhereInput, {
    nullable: true
  })
  where?: GuideWhereInput | undefined;
}
