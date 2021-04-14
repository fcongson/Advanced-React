/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DELETE_PRODUCT
// ====================================================

export interface DELETE_PRODUCT_deleteProduct {
  __typename: "Product";
  id: string;
  name: string | null;
}

export interface DELETE_PRODUCT {
  /**
   *  Delete a single Product item by ID. 
   */
  deleteProduct: DELETE_PRODUCT_deleteProduct | null;
}

export interface DELETE_PRODUCTVariables {
  id: string;
}
