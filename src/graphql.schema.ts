/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Guide {
  id: string;
  name: string;
}

export abstract class IQuery {
  abstract guides(): Guide[] | Promise<Guide[]>;
}

type Nullable<T> = T | null;
