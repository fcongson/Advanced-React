/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PRODUCT
// ====================================================

export interface UPDATE_PRODUCT_updateProduct {
  __typename: "Product";
  id: string;
  name: string | null;
  description: string | null;
  price: number | null;
}

export interface UPDATE_PRODUCT {
  /**
   *  Update a single Product item by ID. 
   */
  updateProduct: UPDATE_PRODUCT_updateProduct | null;
}

export interface UPDATE_PRODUCTVariables {
  id: string;
  name?: string | null;
  description?: string | null;
  price?: number | null;
}
