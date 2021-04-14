/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ALL_PRODUCTS_META
// ====================================================

export interface ALL_PRODUCTS_META__allProductsMeta {
  __typename: "_QueryMeta";
  count: number | null;
}

export interface ALL_PRODUCTS_META {
  /**
   *  Perform a meta-query on all Product items which match the where clause. 
   */
  _allProductsMeta: ALL_PRODUCTS_META__allProductsMeta | null;
}
