/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: REMOVE_FROM_CART
// ====================================================

export interface REMOVE_FROM_CART_deleteCartItem {
  __typename: "CartItem";
  id: string;
}

export interface REMOVE_FROM_CART {
  /**
   *  Delete a single CartItem item by ID. 
   */
  deleteCartItem: REMOVE_FROM_CART_deleteCartItem | null;
}

export interface REMOVE_FROM_CARTVariables {
  id: string;
}
