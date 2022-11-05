import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemCreateOrConnectWithoutSolvingUserInput } from "../inputs/GuideProblemCreateOrConnectWithoutSolvingUserInput";
import { GuideProblemCreateWithoutSolvingUserInput } from "../inputs/GuideProblemCreateWithoutSolvingUserInput";
import { GuideProblemWhereUniqueInput } from "../inputs/GuideProblemWhereUniqueInput";

@TypeGraphQL.InputType("GuideProblemCreateNestedManyWithoutSolvingUserInput", {
  isAbstract: true
})
export class GuideProblemCreateNestedManyWithoutSolvingUserInput {
  @TypeGraphQL.Field(_type => [GuideProblemCreateWithoutSolvingUserInput], {
    nullable: true
  })
  create?: GuideProblemCreateWithoutSolvingUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemCreateOrConnectWithoutSolvingUserInput], {
    nullable: true
  })
  connectOrCreate?: GuideProblemCreateOrConnectWithoutSolvingUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemWhereUniqueInput], {
    nullable: true
  })
  connect?: GuideProblemWhereUniqueInput[] | undefined;
}
