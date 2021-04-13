/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CREATE_PRODUCT
// ====================================================

export interface CREATE_PRODUCT_createProduct {
  __typename: "Product";
  id: string;
}

export interface CREATE_PRODUCT {
  /**
   *  Create a single Product item. 
   */
  createProduct: CREATE_PRODUCT_createProduct | null;
}

export interface CREATE_PRODUCTVariables {
  name: string;
  description: string;
  price: number;
  image?: any | null;
}
