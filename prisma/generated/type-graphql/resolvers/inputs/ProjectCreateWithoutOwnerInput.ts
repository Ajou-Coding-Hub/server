import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ProjectCreateWithoutOwnerInput", {
  isAbstract: true
})
export class ProjectCreateWithoutOwnerInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  projectName!: string;
}
