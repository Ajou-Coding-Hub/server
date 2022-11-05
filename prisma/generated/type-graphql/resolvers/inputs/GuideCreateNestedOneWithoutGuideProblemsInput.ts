import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideCreateOrConnectWithoutGuideProblemsInput } from "../inputs/GuideCreateOrConnectWithoutGuideProblemsInput";
import { GuideCreateWithoutGuideProblemsInput } from "../inputs/GuideCreateWithoutGuideProblemsInput";
import { GuideWhereUniqueInput } from "../inputs/GuideWhereUniqueInput";

@TypeGraphQL.InputType("GuideCreateNestedOneWithoutGuideProblemsInput", {
  isAbstract: true
})
export class GuideCreateNestedOneWithoutGuideProblemsInput {
  @TypeGraphQL.Field(_type => GuideCreateWithoutGuideProblemsInput, {
    nullable: true
  })
  create?: GuideCreateWithoutGuideProblemsInput | undefined;

  @TypeGraphQL.Field(_type => GuideCreateOrConnectWithoutGuideProblemsInput, {
    nullable: true
  })
  connectOrCreate?: GuideCreateOrConnectWithoutGuideProblemsInput | undefined;

  @TypeGraphQL.Field(_type => GuideWhereUniqueInput, {
    nullable: true
  })
  connect?: GuideWhereUniqueInput | undefined;
}
