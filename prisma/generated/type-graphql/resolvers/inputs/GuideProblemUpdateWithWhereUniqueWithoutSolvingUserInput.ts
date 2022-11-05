import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemUpdateWithoutSolvingUserInput } from "../inputs/GuideProblemUpdateWithoutSolvingUserInput";
import { GuideProblemWhereUniqueInput } from "../inputs/GuideProblemWhereUniqueInput";

@TypeGraphQL.InputType("GuideProblemUpdateWithWhereUniqueWithoutSolvingUserInput", {
  isAbstract: true
})
export class GuideProblemUpdateWithWhereUniqueWithoutSolvingUserInput {
  @TypeGraphQL.Field(_type => GuideProblemWhereUniqueInput, {
    nullable: false
  })
  where!: GuideProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuideProblemUpdateWithoutSolvingUserInput, {
    nullable: false
  })
  data!: GuideProblemUpdateWithoutSolvingUserInput;
}
