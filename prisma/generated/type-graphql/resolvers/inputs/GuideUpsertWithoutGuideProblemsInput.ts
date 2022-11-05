import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideCreateWithoutGuideProblemsInput } from "../inputs/GuideCreateWithoutGuideProblemsInput";
import { GuideUpdateWithoutGuideProblemsInput } from "../inputs/GuideUpdateWithoutGuideProblemsInput";

@TypeGraphQL.InputType("GuideUpsertWithoutGuideProblemsInput", {
  isAbstract: true
})
export class GuideUpsertWithoutGuideProblemsInput {
  @TypeGraphQL.Field(_type => GuideUpdateWithoutGuideProblemsInput, {
    nullable: false
  })
  update!: GuideUpdateWithoutGuideProblemsInput;

  @TypeGraphQL.Field(_type => GuideCreateWithoutGuideProblemsInput, {
    nullable: false
  })
  create!: GuideCreateWithoutGuideProblemsInput;
}
