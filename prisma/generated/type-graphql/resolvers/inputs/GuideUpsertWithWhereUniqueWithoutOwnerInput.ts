import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideCreateWithoutOwnerInput } from "../inputs/GuideCreateWithoutOwnerInput";
import { GuideUpdateWithoutOwnerInput } from "../inputs/GuideUpdateWithoutOwnerInput";
import { GuideWhereUniqueInput } from "../inputs/GuideWhereUniqueInput";

@TypeGraphQL.InputType("GuideUpsertWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true
})
export class GuideUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => GuideWhereUniqueInput, {
    nullable: false
  })
  where!: GuideWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuideUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: GuideUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => GuideCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: GuideCreateWithoutOwnerInput;
}
