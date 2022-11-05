import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Project: crudResolvers.ProjectCrudResolver,
  Guide: crudResolvers.GuideCrudResolver,
  GuideProblem: crudResolvers.GuideProblemCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Project: {
    aggregateProject: actionResolvers.AggregateProjectResolver,
    createManyProject: actionResolvers.CreateManyProjectResolver,
    createOneProject: actionResolvers.CreateOneProjectResolver,
    deleteManyProject: actionResolvers.DeleteManyProjectResolver,
    deleteOneProject: actionResolvers.DeleteOneProjectResolver,
    findFirstProject: actionResolvers.FindFirstProjectResolver,
    projects: actionResolvers.FindManyProjectResolver,
    project: actionResolvers.FindUniqueProjectResolver,
    groupByProject: actionResolvers.GroupByProjectResolver,
    updateManyProject: actionResolvers.UpdateManyProjectResolver,
    updateOneProject: actionResolvers.UpdateOneProjectResolver,
    upsertOneProject: actionResolvers.UpsertOneProjectResolver
  },
  Guide: {
    aggregateGuide: actionResolvers.AggregateGuideResolver,
    createManyGuide: actionResolvers.CreateManyGuideResolver,
    createOneGuide: actionResolvers.CreateOneGuideResolver,
    deleteManyGuide: actionResolvers.DeleteManyGuideResolver,
    deleteOneGuide: actionResolvers.DeleteOneGuideResolver,
    findFirstGuide: actionResolvers.FindFirstGuideResolver,
    guides: actionResolvers.FindManyGuideResolver,
    guide: actionResolvers.FindUniqueGuideResolver,
    groupByGuide: actionResolvers.GroupByGuideResolver,
    updateManyGuide: actionResolvers.UpdateManyGuideResolver,
    updateOneGuide: actionResolvers.UpdateOneGuideResolver,
    upsertOneGuide: actionResolvers.UpsertOneGuideResolver
  },
  GuideProblem: {
    aggregateGuideProblem: actionResolvers.AggregateGuideProblemResolver,
    createManyGuideProblem: actionResolvers.CreateManyGuideProblemResolver,
    createOneGuideProblem: actionResolvers.CreateOneGuideProblemResolver,
    deleteManyGuideProblem: actionResolvers.DeleteManyGuideProblemResolver,
    deleteOneGuideProblem: actionResolvers.DeleteOneGuideProblemResolver,
    findFirstGuideProblem: actionResolvers.FindFirstGuideProblemResolver,
    guideProblems: actionResolvers.FindManyGuideProblemResolver,
    guideProblem: actionResolvers.FindUniqueGuideProblemResolver,
    groupByGuideProblem: actionResolvers.GroupByGuideProblemResolver,
    updateManyGuideProblem: actionResolvers.UpdateManyGuideProblemResolver,
    updateOneGuideProblem: actionResolvers.UpdateOneGuideProblemResolver,
    upsertOneGuideProblem: actionResolvers.UpsertOneGuideProblemResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "users", "user", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Project: ["aggregateProject", "createManyProject", "createOneProject", "deleteManyProject", "deleteOneProject", "findFirstProject", "projects", "project", "groupByProject", "updateManyProject", "updateOneProject", "upsertOneProject"],
  Guide: ["aggregateGuide", "createManyGuide", "createOneGuide", "deleteManyGuide", "deleteOneGuide", "findFirstGuide", "guides", "guide", "groupByGuide", "updateManyGuide", "updateOneGuide", "upsertOneGuide"],
  GuideProblem: ["aggregateGuideProblem", "createManyGuideProblem", "createOneGuideProblem", "deleteManyGuideProblem", "deleteOneGuideProblem", "findFirstGuideProblem", "guideProblems", "guideProblem", "groupByGuideProblem", "updateManyGuideProblem", "updateOneGuideProblem", "upsertOneGuideProblem"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateProjectArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProjectArgs: ["data", "skipDuplicates"],
  CreateOneProjectArgs: ["data"],
  DeleteManyProjectArgs: ["where"],
  DeleteOneProjectArgs: ["where"],
  FindFirstProjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProjectArgs: ["where"],
  GroupByProjectArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProjectArgs: ["data", "where"],
  UpdateOneProjectArgs: ["data", "where"],
  UpsertOneProjectArgs: ["where", "create", "update"],
  AggregateGuideArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyGuideArgs: ["data", "skipDuplicates"],
  CreateOneGuideArgs: ["data"],
  DeleteManyGuideArgs: ["where"],
  DeleteOneGuideArgs: ["where"],
  FindFirstGuideArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyGuideArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueGuideArgs: ["where"],
  GroupByGuideArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyGuideArgs: ["data", "where"],
  UpdateOneGuideArgs: ["data", "where"],
  UpsertOneGuideArgs: ["where", "create", "update"],
  AggregateGuideProblemArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyGuideProblemArgs: ["data", "skipDuplicates"],
  CreateOneGuideProblemArgs: ["data"],
  DeleteManyGuideProblemArgs: ["where"],
  DeleteOneGuideProblemArgs: ["where"],
  FindFirstGuideProblemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyGuideProblemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueGuideProblemArgs: ["where"],
  GroupByGuideProblemArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyGuideProblemArgs: ["data", "where"],
  UpdateOneGuideProblemArgs: ["data", "where"],
  UpsertOneGuideProblemArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Project: relationResolvers.ProjectRelationsResolver,
  Guide: relationResolvers.GuideRelationsResolver,
  GuideProblem: relationResolvers.GuideProblemRelationsResolver
};
const relationResolversInfo = {
  User: ["Project", "ownerGuide", "solvingGuideProblem"],
  Project: ["owner"],
  Guide: ["owner", "guideProblems"],
  GuideProblem: ["Guide", "solvingUser"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "email", "name"],
  Project: ["id", "projectName", "ownerId"],
  Guide: ["id", "ownerId", "name", "level"],
  GuideProblem: ["id", "markdown", "guideId", "isSolved"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "email", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProject: ["_count", "_avg", "_sum", "_min", "_max"],
  ProjectGroupBy: ["id", "projectName", "ownerId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateGuide: ["_count", "_avg", "_sum", "_min", "_max"],
  GuideGroupBy: ["id", "ownerId", "name", "level", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateGuideProblem: ["_count", "_avg", "_sum", "_min", "_max"],
  GuideProblemGroupBy: ["id", "markdown", "guideId", "isSolved", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["Project", "ownerGuide", "solvingGuideProblem"],
  UserCountAggregate: ["id", "email", "name", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "email", "name"],
  UserMaxAggregate: ["id", "email", "name"],
  ProjectCountAggregate: ["id", "projectName", "ownerId", "_all"],
  ProjectAvgAggregate: ["id", "ownerId"],
  ProjectSumAggregate: ["id", "ownerId"],
  ProjectMinAggregate: ["id", "projectName", "ownerId"],
  ProjectMaxAggregate: ["id", "projectName", "ownerId"],
  GuideCount: ["guideProblems"],
  GuideCountAggregate: ["id", "ownerId", "name", "level", "_all"],
  GuideAvgAggregate: ["id", "ownerId", "level"],
  GuideSumAggregate: ["id", "ownerId", "level"],
  GuideMinAggregate: ["id", "ownerId", "name", "level"],
  GuideMaxAggregate: ["id", "ownerId", "name", "level"],
  GuideProblemCount: ["solvingUser"],
  GuideProblemCountAggregate: ["id", "markdown", "guideId", "isSolved", "_all"],
  GuideProblemAvgAggregate: ["id", "guideId"],
  GuideProblemSumAggregate: ["id", "guideId"],
  GuideProblemMinAggregate: ["id", "markdown", "guideId", "isSolved"],
  GuideProblemMaxAggregate: ["id", "markdown", "guideId", "isSolved"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "Project", "ownerGuide", "solvingGuideProblem"],
  UserOrderByWithRelationInput: ["id", "email", "name", "Project", "ownerGuide", "solvingGuideProblem"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "email", "name", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "name"],
  ProjectWhereInput: ["AND", "OR", "NOT", "id", "projectName", "owner", "ownerId"],
  ProjectOrderByWithRelationInput: ["id", "projectName", "owner", "ownerId"],
  ProjectWhereUniqueInput: ["id"],
  ProjectOrderByWithAggregationInput: ["id", "projectName", "ownerId", "_count", "_avg", "_max", "_min", "_sum"],
  ProjectScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "projectName", "ownerId"],
  GuideWhereInput: ["AND", "OR", "NOT", "id", "owner", "ownerId", "name", "level", "guideProblems"],
  GuideOrderByWithRelationInput: ["id", "owner", "ownerId", "name", "level", "guideProblems"],
  GuideWhereUniqueInput: ["id"],
  GuideOrderByWithAggregationInput: ["id", "ownerId", "name", "level", "_count", "_avg", "_max", "_min", "_sum"],
  GuideScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "ownerId", "name", "level"],
  GuideProblemWhereInput: ["AND", "OR", "NOT", "id", "markdown", "Guide", "guideId", "isSolved", "solvingUser"],
  GuideProblemOrderByWithRelationInput: ["id", "markdown", "Guide", "guideId", "isSolved", "solvingUser"],
  GuideProblemWhereUniqueInput: ["id"],
  GuideProblemOrderByWithAggregationInput: ["id", "markdown", "guideId", "isSolved", "_count", "_avg", "_max", "_min", "_sum"],
  GuideProblemScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "markdown", "guideId", "isSolved"],
  UserCreateInput: ["email", "name", "Project", "ownerGuide", "solvingGuideProblem"],
  UserUpdateInput: ["email", "name", "Project", "ownerGuide", "solvingGuideProblem"],
  UserCreateManyInput: ["id", "email", "name"],
  UserUpdateManyMutationInput: ["email", "name"],
  ProjectCreateInput: ["projectName", "owner"],
  ProjectUpdateInput: ["projectName", "owner"],
  ProjectCreateManyInput: ["id", "projectName", "ownerId"],
  ProjectUpdateManyMutationInput: ["projectName"],
  GuideCreateInput: ["owner", "name", "level", "guideProblems"],
  GuideUpdateInput: ["owner", "name", "level", "guideProblems"],
  GuideCreateManyInput: ["id", "ownerId", "name", "level"],
  GuideUpdateManyMutationInput: ["name", "level"],
  GuideProblemCreateInput: ["markdown", "Guide", "isSolved", "solvingUser"],
  GuideProblemUpdateInput: ["markdown", "Guide", "isSolved", "solvingUser"],
  GuideProblemCreateManyInput: ["id", "markdown", "guideId", "isSolved"],
  GuideProblemUpdateManyMutationInput: ["markdown", "isSolved"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  ProjectListRelationFilter: ["every", "some", "none"],
  GuideListRelationFilter: ["every", "some", "none"],
  GuideProblemListRelationFilter: ["every", "some", "none"],
  ProjectOrderByRelationAggregateInput: ["_count"],
  GuideOrderByRelationAggregateInput: ["_count"],
  GuideProblemOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "email", "name"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "email", "name"],
  UserMinOrderByAggregateInput: ["id", "email", "name"],
  UserSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  ProjectCountOrderByAggregateInput: ["id", "projectName", "ownerId"],
  ProjectAvgOrderByAggregateInput: ["id", "ownerId"],
  ProjectMaxOrderByAggregateInput: ["id", "projectName", "ownerId"],
  ProjectMinOrderByAggregateInput: ["id", "projectName", "ownerId"],
  ProjectSumOrderByAggregateInput: ["id", "ownerId"],
  GuideCountOrderByAggregateInput: ["id", "ownerId", "name", "level"],
  GuideAvgOrderByAggregateInput: ["id", "ownerId", "level"],
  GuideMaxOrderByAggregateInput: ["id", "ownerId", "name", "level"],
  GuideMinOrderByAggregateInput: ["id", "ownerId", "name", "level"],
  GuideSumOrderByAggregateInput: ["id", "ownerId", "level"],
  GuideRelationFilter: ["is", "isNot"],
  BoolFilter: ["equals", "not"],
  UserListRelationFilter: ["every", "some", "none"],
  UserOrderByRelationAggregateInput: ["_count"],
  GuideProblemCountOrderByAggregateInput: ["id", "markdown", "guideId", "isSolved"],
  GuideProblemAvgOrderByAggregateInput: ["id", "guideId"],
  GuideProblemMaxOrderByAggregateInput: ["id", "markdown", "guideId", "isSolved"],
  GuideProblemMinOrderByAggregateInput: ["id", "markdown", "guideId", "isSolved"],
  GuideProblemSumOrderByAggregateInput: ["id", "guideId"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  ProjectCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "createMany", "connect"],
  GuideCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "createMany", "connect"],
  GuideProblemCreateNestedManyWithoutSolvingUserInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  ProjectUpdateManyWithoutOwnerNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  GuideUpdateManyWithoutOwnerNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  GuideProblemUpdateManyWithoutSolvingUserNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutProjectInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutProjectNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutOwnerGuideInput: ["create", "connectOrCreate", "connect"],
  GuideProblemCreateNestedManyWithoutGuideInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutOwnerGuideNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  GuideProblemUpdateManyWithoutGuideNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  GuideCreateNestedOneWithoutGuideProblemsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutSolvingGuideProblemInput: ["create", "connectOrCreate", "connect"],
  GuideUpdateOneRequiredWithoutGuideProblemsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  BoolFieldUpdateOperationsInput: ["set"],
  UserUpdateManyWithoutSolvingGuideProblemNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  ProjectCreateWithoutOwnerInput: ["projectName"],
  ProjectCreateOrConnectWithoutOwnerInput: ["where", "create"],
  ProjectCreateManyOwnerInputEnvelope: ["data", "skipDuplicates"],
  GuideCreateWithoutOwnerInput: ["name", "level", "guideProblems"],
  GuideCreateOrConnectWithoutOwnerInput: ["where", "create"],
  GuideCreateManyOwnerInputEnvelope: ["data", "skipDuplicates"],
  GuideProblemCreateWithoutSolvingUserInput: ["markdown", "Guide", "isSolved"],
  GuideProblemCreateOrConnectWithoutSolvingUserInput: ["where", "create"],
  ProjectUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  ProjectUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  ProjectUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  ProjectScalarWhereInput: ["AND", "OR", "NOT", "id", "projectName", "ownerId"],
  GuideUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  GuideUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  GuideUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  GuideScalarWhereInput: ["AND", "OR", "NOT", "id", "ownerId", "name", "level"],
  GuideProblemUpsertWithWhereUniqueWithoutSolvingUserInput: ["where", "update", "create"],
  GuideProblemUpdateWithWhereUniqueWithoutSolvingUserInput: ["where", "data"],
  GuideProblemUpdateManyWithWhereWithoutSolvingUserInput: ["where", "data"],
  GuideProblemScalarWhereInput: ["AND", "OR", "NOT", "id", "markdown", "guideId", "isSolved"],
  UserCreateWithoutProjectInput: ["email", "name", "ownerGuide", "solvingGuideProblem"],
  UserCreateOrConnectWithoutProjectInput: ["where", "create"],
  UserUpsertWithoutProjectInput: ["update", "create"],
  UserUpdateWithoutProjectInput: ["email", "name", "ownerGuide", "solvingGuideProblem"],
  UserCreateWithoutOwnerGuideInput: ["email", "name", "Project", "solvingGuideProblem"],
  UserCreateOrConnectWithoutOwnerGuideInput: ["where", "create"],
  GuideProblemCreateWithoutGuideInput: ["markdown", "isSolved", "solvingUser"],
  GuideProblemCreateOrConnectWithoutGuideInput: ["where", "create"],
  GuideProblemCreateManyGuideInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutOwnerGuideInput: ["update", "create"],
  UserUpdateWithoutOwnerGuideInput: ["email", "name", "Project", "solvingGuideProblem"],
  GuideProblemUpsertWithWhereUniqueWithoutGuideInput: ["where", "update", "create"],
  GuideProblemUpdateWithWhereUniqueWithoutGuideInput: ["where", "data"],
  GuideProblemUpdateManyWithWhereWithoutGuideInput: ["where", "data"],
  GuideCreateWithoutGuideProblemsInput: ["owner", "name", "level"],
  GuideCreateOrConnectWithoutGuideProblemsInput: ["where", "create"],
  UserCreateWithoutSolvingGuideProblemInput: ["email", "name", "Project", "ownerGuide"],
  UserCreateOrConnectWithoutSolvingGuideProblemInput: ["where", "create"],
  GuideUpsertWithoutGuideProblemsInput: ["update", "create"],
  GuideUpdateWithoutGuideProblemsInput: ["owner", "name", "level"],
  UserUpsertWithWhereUniqueWithoutSolvingGuideProblemInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutSolvingGuideProblemInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutSolvingGuideProblemInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "email", "name"],
  ProjectCreateManyOwnerInput: ["id", "projectName"],
  GuideCreateManyOwnerInput: ["id", "name", "level"],
  ProjectUpdateWithoutOwnerInput: ["projectName"],
  GuideUpdateWithoutOwnerInput: ["name", "level", "guideProblems"],
  GuideProblemUpdateWithoutSolvingUserInput: ["markdown", "Guide", "isSolved"],
  GuideProblemCreateManyGuideInput: ["id", "markdown", "isSolved"],
  GuideProblemUpdateWithoutGuideInput: ["markdown", "isSolved", "solvingUser"],
  UserUpdateWithoutSolvingGuideProblemInput: ["email", "name", "Project", "ownerGuide"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

