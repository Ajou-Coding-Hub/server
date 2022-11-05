import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemCreateOrConnectWithoutSolvingUserInput } from "../inputs/GuideProblemCreateOrConnectWithoutSolvingUserInput";
import { GuideProblemCreateWithoutSolvingUserInput } from "../inputs/GuideProblemCreateWithoutSolvingUserInput";
import { GuideProblemScalarWhereInput } from "../inputs/GuideProblemScalarWhereInput";
import { GuideProblemUpdateManyWithWhereWithoutSolvingUserInput } from "../inputs/GuideProblemUpdateManyWithWhereWithoutSolvingUserInput";
import { GuideProblemUpdateWithWhereUniqueWithoutSolvingUserInput } from "../inputs/GuideProblemUpdateWithWhereUniqueWithoutSolvingUserInput";
import { GuideProblemUpsertWithWhereUniqueWithoutSolvingUserInput } from "../inputs/GuideProblemUpsertWithWhereUniqueWithoutSolvingUserInput";
import { GuideProblemWhereUniqueInput } from "../inputs/GuideProblemWhereUniqueInput";

@TypeGraphQL.InputType("GuideProblemUpdateManyWithoutSolvingUserNestedInput", {
  isAbstract: true
})
export class GuideProblemUpdateManyWithoutSolvingUserNestedInput {
  @TypeGraphQL.Field(_type => [GuideProblemCreateWithoutSolvingUserInput], {
    nullable: true
  })
  create?: GuideProblemCreateWithoutSolvingUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemCreateOrConnectWithoutSolvingUserInput], {
    nullable: true
  })
  connectOrCreate?: GuideProblemCreateOrConnectWithoutSolvingUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemUpsertWithWhereUniqueWithoutSolvingUserInput], {
    nullable: true
  })
  upsert?: GuideProblemUpsertWithWhereUniqueWithoutSolvingUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemWhereUniqueInput], {
    nullable: true
  })
  set?: GuideProblemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemWhereUniqueInput], {
    nullable: true
  })
  disconnect?: GuideProblemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemWhereUniqueInput], {
    nullable: true
  })
  delete?: GuideProblemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemWhereUniqueInput], {
    nullable: true
  })
  connect?: GuideProblemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemUpdateWithWhereUniqueWithoutSolvingUserInput], {
    nullable: true
  })
  update?: GuideProblemUpdateWithWhereUniqueWithoutSolvingUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemUpdateManyWithWhereWithoutSolvingUserInput], {
    nullable: true
  })
  updateMany?: GuideProblemUpdateManyWithWhereWithoutSolvingUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GuideProblemScalarWhereInput[] | undefined;
}
