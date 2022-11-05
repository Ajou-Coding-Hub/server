import * as TypeGraphQL from "type-graphql";

export enum GuideScalarFieldEnum {
  id = "id",
  ownerId = "ownerId",
  name = "name",
  level = "level"
}
TypeGraphQL.registerEnumType(GuideScalarFieldEnum, {
  name: "GuideScalarFieldEnum",
  description: undefined,
});
