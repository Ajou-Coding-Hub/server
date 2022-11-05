import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideUpdateWithoutOwnerInput } from "../inputs/GuideUpdateWithoutOwnerInput";
import { GuideWhereUniqueInput } from "../inputs/GuideWhereUniqueInput";

@TypeGraphQL.InputType("GuideUpdateWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true
})
export class GuideUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => GuideWhereUniqueInput, {
    nullable: false
  })
  where!: GuideWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuideUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: GuideUpdateWithoutOwnerInput;
}
