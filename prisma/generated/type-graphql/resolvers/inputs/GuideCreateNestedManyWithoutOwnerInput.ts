import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideCreateManyOwnerInputEnvelope } from "../inputs/GuideCreateManyOwnerInputEnvelope";
import { GuideCreateOrConnectWithoutOwnerInput } from "../inputs/GuideCreateOrConnectWithoutOwnerInput";
import { GuideCreateWithoutOwnerInput } from "../inputs/GuideCreateWithoutOwnerInput";
import { GuideWhereUniqueInput } from "../inputs/GuideWhereUniqueInput";

@TypeGraphQL.InputType("GuideCreateNestedManyWithoutOwnerInput", {
  isAbstract: true
})
export class GuideCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [GuideCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: GuideCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: GuideCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => GuideCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: GuideCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuideWhereUniqueInput], {
    nullable: true
  })
  connect?: GuideWhereUniqueInput[] | undefined;
}
