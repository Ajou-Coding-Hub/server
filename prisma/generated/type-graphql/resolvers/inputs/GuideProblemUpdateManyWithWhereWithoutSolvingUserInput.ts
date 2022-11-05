import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemScalarWhereInput } from "../inputs/GuideProblemScalarWhereInput";
import { GuideProblemUpdateManyMutationInput } from "../inputs/GuideProblemUpdateManyMutationInput";

@TypeGraphQL.InputType("GuideProblemUpdateManyWithWhereWithoutSolvingUserInput", {
  isAbstract: true
})
export class GuideProblemUpdateManyWithWhereWithoutSolvingUserInput {
  @TypeGraphQL.Field(_type => GuideProblemScalarWhereInput, {
    nullable: false
  })
  where!: GuideProblemScalarWhereInput;

  @TypeGraphQL.Field(_type => GuideProblemUpdateManyMutationInput, {
    nullable: false
  })
  data!: GuideProblemUpdateManyMutationInput;
}
