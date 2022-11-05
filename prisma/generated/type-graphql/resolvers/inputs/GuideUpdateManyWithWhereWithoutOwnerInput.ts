import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideScalarWhereInput } from "../inputs/GuideScalarWhereInput";
import { GuideUpdateManyMutationInput } from "../inputs/GuideUpdateManyMutationInput";

@TypeGraphQL.InputType("GuideUpdateManyWithWhereWithoutOwnerInput", {
  isAbstract: true
})
export class GuideUpdateManyWithWhereWithoutOwnerInput {
  @TypeGraphQL.Field(_type => GuideScalarWhereInput, {
    nullable: false
  })
  where!: GuideScalarWhereInput;

  @TypeGraphQL.Field(_type => GuideUpdateManyMutationInput, {
    nullable: false
  })
  data!: GuideUpdateManyMutationInput;
}
