/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ADD_TO_CART
// ====================================================

export interface ADD_TO_CART_addToCart {
  __typename: "CartItem";
  id: string;
}

export interface ADD_TO_CART {
  addToCart: ADD_TO_CART_addToCart | null;
}

export interface ADD_TO_CARTVariables {
  id: string;
}
