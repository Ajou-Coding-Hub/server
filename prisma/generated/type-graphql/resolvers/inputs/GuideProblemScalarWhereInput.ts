import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GuideProblemScalarWhereInput", {
  isAbstract: true
})
export class GuideProblemScalarWhereInput {
  @TypeGraphQL.Field(_type => [GuideProblemScalarWhereInput], {
    nullable: true
  })
  AND?: GuideProblemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemScalarWhereInput], {
    nullable: true
  })
  OR?: GuideProblemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideProblemScalarWhereInput], {
    nullable: true
  })
  NOT?: GuideProblemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  markdown?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  guideId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isSolved?: BoolFilter | undefined;
}
