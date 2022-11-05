import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSolvingGuideProblemInput } from "../inputs/UserCreateOrConnectWithoutSolvingGuideProblemInput";
import { UserCreateWithoutSolvingGuideProblemInput } from "../inputs/UserCreateWithoutSolvingGuideProblemInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutSolvingGuideProblemInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutSolvingGuideProblemInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutSolvingGuideProblemInput], {
    nullable: true
  })
  create?: UserCreateWithoutSolvingGuideProblemInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutSolvingGuideProblemInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSolvingGuideProblemInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
