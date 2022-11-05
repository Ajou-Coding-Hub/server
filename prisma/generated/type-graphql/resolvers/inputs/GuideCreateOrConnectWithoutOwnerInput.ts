import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideCreateWithoutOwnerInput } from "../inputs/GuideCreateWithoutOwnerInput";
import { GuideWhereUniqueInput } from "../inputs/GuideWhereUniqueInput";

@TypeGraphQL.InputType("GuideCreateOrConnectWithoutOwnerInput", {
  isAbstract: true
})
export class GuideCreateOrConnectWithoutOwnerInput {
  @TypeGraphQL.Field(_type => GuideWhereUniqueInput, {
    nullable: false
  })
  where!: GuideWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuideCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: GuideCreateWithoutOwnerInput;
}
