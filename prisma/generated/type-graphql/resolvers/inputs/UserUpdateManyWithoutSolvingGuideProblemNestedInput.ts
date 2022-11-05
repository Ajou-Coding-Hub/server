import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSolvingGuideProblemInput } from "../inputs/UserCreateOrConnectWithoutSolvingGuideProblemInput";
import { UserCreateWithoutSolvingGuideProblemInput } from "../inputs/UserCreateWithoutSolvingGuideProblemInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutSolvingGuideProblemInput } from "../inputs/UserUpdateManyWithWhereWithoutSolvingGuideProblemInput";
import { UserUpdateWithWhereUniqueWithoutSolvingGuideProblemInput } from "../inputs/UserUpdateWithWhereUniqueWithoutSolvingGuideProblemInput";
import { UserUpsertWithWhereUniqueWithoutSolvingGuideProblemInput } from "../inputs/UserUpsertWithWhereUniqueWithoutSolvingGuideProblemInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutSolvingGuideProblemNestedInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutSolvingGuideProblemNestedInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutSolvingGuideProblemInput], {
    nullable: true
  })
  create?: UserCreateWithoutSolvingGuideProblemInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutSolvingGuideProblemInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSolvingGuideProblemInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutSolvingGuideProblemInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutSolvingGuideProblemInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutSolvingGuideProblemInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutSolvingGuideProblemInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutSolvingGuideProblemInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutSolvingGuideProblemInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
