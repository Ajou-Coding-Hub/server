import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemCreateWithoutSolvingUserInput } from "../inputs/GuideProblemCreateWithoutSolvingUserInput";
import { GuideProblemUpdateWithoutSolvingUserInput } from "../inputs/GuideProblemUpdateWithoutSolvingUserInput";
import { GuideProblemWhereUniqueInput } from "../inputs/GuideProblemWhereUniqueInput";

@TypeGraphQL.InputType("GuideProblemUpsertWithWhereUniqueWithoutSolvingUserInput", {
  isAbstract: true
})
export class GuideProblemUpsertWithWhereUniqueWithoutSolvingUserInput {
  @TypeGraphQL.Field(_type => GuideProblemWhereUniqueInput, {
    nullable: false
  })
  where!: GuideProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuideProblemUpdateWithoutSolvingUserInput, {
    nullable: false
  })
  update!: GuideProblemUpdateWithoutSolvingUserInput;

  @TypeGraphQL.Field(_type => GuideProblemCreateWithoutSolvingUserInput, {
    nullable: false
  })
  create!: GuideProblemCreateWithoutSolvingUserInput;
}
