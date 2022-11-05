import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideCreateWithoutGuideProblemsInput } from "../inputs/GuideCreateWithoutGuideProblemsInput";
import { GuideWhereUniqueInput } from "../inputs/GuideWhereUniqueInput";

@TypeGraphQL.InputType("GuideCreateOrConnectWithoutGuideProblemsInput", {
  isAbstract: true
})
export class GuideCreateOrConnectWithoutGuideProblemsInput {
  @TypeGraphQL.Field(_type => GuideWhereUniqueInput, {
    nullable: false
  })
  where!: GuideWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuideCreateWithoutGuideProblemsInput, {
    nullable: false
  })
  create!: GuideCreateWithoutGuideProblemsInput;
}
