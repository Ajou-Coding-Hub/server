import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideCreateOrConnectWithoutGuideProblemsInput } from "../inputs/GuideCreateOrConnectWithoutGuideProblemsInput";
import { GuideCreateWithoutGuideProblemsInput } from "../inputs/GuideCreateWithoutGuideProblemsInput";
import { GuideUpdateWithoutGuideProblemsInput } from "../inputs/GuideUpdateWithoutGuideProblemsInput";
import { GuideUpsertWithoutGuideProblemsInput } from "../inputs/GuideUpsertWithoutGuideProblemsInput";
import { GuideWhereUniqueInput } from "../inputs/GuideWhereUniqueInput";

@TypeGraphQL.InputType("GuideUpdateOneRequiredWithoutGuideProblemsNestedInput", {
  isAbstract: true
})
export class GuideUpdateOneRequiredWithoutGuideProblemsNestedInput {
  @TypeGraphQL.Field(_type => GuideCreateWithoutGuideProblemsInput, {
    nullable: true
  })
  create?: GuideCreateWithoutGuideProblemsInput | undefined;

  @TypeGraphQL.Field(_type => GuideCreateOrConnectWithoutGuideProblemsInput, {
    nullable: true
  })
  connectOrCreate?: GuideCreateOrConnectWithoutGuideProblemsInput | undefined;

  @TypeGraphQL.Field(_type => GuideUpsertWithoutGuideProblemsInput, {
    nullable: true
  })
  upsert?: GuideUpsertWithoutGuideProblemsInput | undefined;

  @TypeGraphQL.Field(_type => GuideWhereUniqueInput, {
    nullable: true
  })
  connect?: GuideWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GuideUpdateWithoutGuideProblemsInput, {
    nullable: true
  })
  update?: GuideUpdateWithoutGuideProblemsInput | undefined;
}
