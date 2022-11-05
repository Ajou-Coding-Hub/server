import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemCreateManyGuideInputEnvelope } from "../inputs/GuideProblemCreateManyGuideInputEnvelope";
import { GuideProblemCreateOrConnectWithoutGuideInput } from "../inputs/GuideProblemCreateOrConnectWithoutGuideInput";
import { GuideProblemCreateWithoutGuideInput } from "../inputs/GuideProblemCreateWithoutGuideInput";
import { GuideProblemWhereUniqueInput } from "../inputs/GuideProblemWhereUniqueInput";

@TypeGraphQL.InputType("GuideProblemCreateNestedManyWithoutGuideInput", {
  isAbstract: true
})
export class GuideProblemCreateNestedManyWithoutGuideInput {
  @TypeGraphQL.Field(_type => [GuideProblemCreateWithoutGuideInput], {
    nullable: true
  })
  create?: GuideProblemCreateWithoutGuideInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemCreateOrConnectWithoutGuideInput], {
    nullable: true
  })
  connectOrCreate?: GuideProblemCreateOrConnectWithoutGuideInput[] | undefined;

  @TypeGraphQL.Field(_type => GuideProblemCreateManyGuideInputEnvelope, {
    nullable: true
  })
  createMany?: GuideProblemCreateManyGuideInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemWhereUniqueInput], {
    nullable: true
  })
  connect?: GuideProblemWhereUniqueInput[] | undefined;
}
