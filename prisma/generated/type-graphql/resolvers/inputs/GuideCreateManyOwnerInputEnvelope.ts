import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideCreateManyOwnerInput } from "../inputs/GuideCreateManyOwnerInput";

@TypeGraphQL.InputType("GuideCreateManyOwnerInputEnvelope", {
  isAbstract: true
})
export class GuideCreateManyOwnerInputEnvelope {
  @TypeGraphQL.Field(_type => [GuideCreateManyOwnerInput], {
    nullable: false
  })
  data!: GuideCreateManyOwnerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
