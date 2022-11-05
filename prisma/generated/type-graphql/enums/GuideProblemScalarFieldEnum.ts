import * as TypeGraphQL from "type-graphql";

export enum GuideProblemScalarFieldEnum {
  id = "id",
  markdown = "markdown",
  guideId = "guideId",
  isSolved = "isSolved"
}
TypeGraphQL.registerEnumType(GuideProblemScalarFieldEnum, {
  name: "GuideProblemScalarFieldEnum",
  description: undefined,
});
