import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemCreateWithoutSolvingUserInput } from "../inputs/GuideProblemCreateWithoutSolvingUserInput";
import { GuideProblemWhereUniqueInput } from "../inputs/GuideProblemWhereUniqueInput";

@TypeGraphQL.InputType("GuideProblemCreateOrConnectWithoutSolvingUserInput", {
  isAbstract: true
})
export class GuideProblemCreateOrConnectWithoutSolvingUserInput {
  @TypeGraphQL.Field(_type => GuideProblemWhereUniqueInput, {
    nullable: false
  })
  where!: GuideProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuideProblemCreateWithoutSolvingUserInput, {
    nullable: false
  })
  create!: GuideProblemCreateWithoutSolvingUserInput;
}
