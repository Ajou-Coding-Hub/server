import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GuideScalarWhereInput", {
  isAbstract: true
})
export class GuideScalarWhereInput {
  @TypeGraphQL.Field(_type => [GuideScalarWhereInput], {
    nullable: true
  })
  AND?: GuideScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideScalarWhereInput], {
    nullable: true
  })
  OR?: GuideScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuideScalarWhereInput], {
    nullable: true
  })
  NOT?: GuideScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  ownerId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  level?: IntFilter | undefined;
}
