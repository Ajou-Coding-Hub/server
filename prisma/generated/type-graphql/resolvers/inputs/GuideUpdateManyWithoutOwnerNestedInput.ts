import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideCreateManyOwnerInputEnvelope } from "../inputs/GuideCreateManyOwnerInputEnvelope";
import { GuideCreateOrConnectWithoutOwnerInput } from "../inputs/GuideCreateOrConnectWithoutOwnerInput";
import { GuideCreateWithoutOwnerInput } from "../inputs/GuideCreateWithoutOwnerInput";
import { GuideScalarWhereInput } from "../inputs/GuideScalarWhereInput";
import { GuideUpdateManyWithWhereWithoutOwnerInput } from "../inputs/GuideUpdateManyWithWhereWithoutOwnerInput";
import { GuideUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/GuideUpdateWithWhereUniqueWithoutOwnerInput";
import { GuideUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/GuideUpsertWithWhereUniqueWithoutOwnerInput";
import { GuideWhereUniqueInput } from "../inputs/GuideWhereUniqueInput";

@TypeGraphQL.InputType("GuideUpdateManyWithoutOwnerNestedInput", {
  isAbstract: true
})
export class GuideUpdateManyWithoutOwnerNestedInput {
  @TypeGraphQL.Field(_type => [GuideCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: GuideCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: GuideCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: GuideUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => GuideCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: GuideCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuideWhereUniqueInput], {
    nullable: true
  })
  set?: GuideWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideWhereUniqueInput], {
    nullable: true
  })
  disconnect?: GuideWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideWhereUniqueInput], {
    nullable: true
  })
  delete?: GuideWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideWhereUniqueInput], {
    nullable: true
  })
  connect?: GuideWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: GuideUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: GuideUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GuideScalarWhereInput[] | undefined;
}
