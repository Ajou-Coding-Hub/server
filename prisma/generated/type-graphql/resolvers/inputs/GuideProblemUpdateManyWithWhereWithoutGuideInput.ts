import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemScalarWhereInput } from "../inputs/GuideProblemScalarWhereInput";
import { GuideProblemUpdateManyMutationInput } from "../inputs/GuideProblemUpdateManyMutationInput";

@TypeGraphQL.InputType("GuideProblemUpdateManyWithWhereWithoutGuideInput", {
  isAbstract: true
})
export class GuideProblemUpdateManyWithWhereWithoutGuideInput {
  @TypeGraphQL.Field(_type => GuideProblemScalarWhereInput, {
    nullable: false
  })
  where!: GuideProblemScalarWhereInput;

  @TypeGraphQL.Field(_type => GuideProblemUpdateManyMutationInput, {
    nullable: false
  })
  data!: GuideProblemUpdateManyMutationInput;
}
