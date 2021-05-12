/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CREATE_ORDER
// ====================================================

export interface CREATE_ORDER_checkout_items {
  __typename: "OrderItem";
  id: string;
  name: string | null;
}

export interface CREATE_ORDER_checkout {
  __typename: "Order";
  id: string;
  charge: string | null;
  total: number | null;
  items: CREATE_ORDER_checkout_items[];
}

export interface CREATE_ORDER {
  checkout: CREATE_ORDER_checkout | null;
}

export interface CREATE_ORDERVariables {
  token: string;
}
