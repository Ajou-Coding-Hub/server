import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideProblemCreateManyGuideInput } from "../inputs/GuideProblemCreateManyGuideInput";

@TypeGraphQL.InputType("GuideProblemCreateManyGuideInputEnvelope", {
  isAbstract: true
})
export class GuideProblemCreateManyGuideInputEnvelope {
  @TypeGraphQL.Field(_type => [GuideProblemCreateManyGuideInput], {
    nullable: false
  })
  data!: GuideProblemCreateManyGuideInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
