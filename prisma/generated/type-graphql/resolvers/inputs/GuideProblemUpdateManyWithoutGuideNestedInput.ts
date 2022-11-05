import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemCreateManyGuideInputEnvelope } from "../inputs/GuideProblemCreateManyGuideInputEnvelope";
import { GuideProblemCreateOrConnectWithoutGuideInput } from "../inputs/GuideProblemCreateOrConnectWithoutGuideInput";
import { GuideProblemCreateWithoutGuideInput } from "../inputs/GuideProblemCreateWithoutGuideInput";
import { GuideProblemScalarWhereInput } from "../inputs/GuideProblemScalarWhereInput";
import { GuideProblemUpdateManyWithWhereWithoutGuideInput } from "../inputs/GuideProblemUpdateManyWithWhereWithoutGuideInput";
import { GuideProblemUpdateWithWhereUniqueWithoutGuideInput } from "../inputs/GuideProblemUpdateWithWhereUniqueWithoutGuideInput";
import { GuideProblemUpsertWithWhereUniqueWithoutGuideInput } from "../inputs/GuideProblemUpsertWithWhereUniqueWithoutGuideInput";
import { GuideProblemWhereUniqueInput } from "../inputs/GuideProblemWhereUniqueInput";

@TypeGraphQL.InputType("GuideProblemUpdateManyWithoutGuideNestedInput", {
  isAbstract: true
})
export class GuideProblemUpdateManyWithoutGuideNestedInput {
  @TypeGraphQL.Field(_type => [GuideProblemCreateWithoutGuideInput], {
    nullable: true
  })
  create?: GuideProblemCreateWithoutGuideInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemCreateOrConnectWithoutGuideInput], {
    nullable: true
  })
  connectOrCreate?: GuideProblemCreateOrConnectWithoutGuideInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemUpsertWithWhereUniqueWithoutGuideInput], {
    nullable: true
  })
  upsert?: GuideProblemUpsertWithWhereUniqueWithoutGuideInput[] | undefined;

  @TypeGraphQL.Field(_type => GuideProblemCreateManyGuideInputEnvelope, {
    nullable: true
  })
  createMany?: GuideProblemCreateManyGuideInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [GuideProblemUpdateWithWhereUniqueWithoutGuideInput], {
    nullable: true
  })
  update?: GuideProblemUpdateWithWhereUniqueWithoutGuideInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemUpdateManyWithWhereWithoutGuideInput], {
    nullable: true
  })
  updateMany?: GuideProblemUpdateManyWithWhereWithoutGuideInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GuideProblemScalarWhereInput[] | undefined;
}
