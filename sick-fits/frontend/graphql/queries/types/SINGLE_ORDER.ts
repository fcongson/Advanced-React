/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SINGLE_ORDER
// ====================================================

export interface SINGLE_ORDER_Order_user {
  __typename: "User";
  id: string;
}

export interface SINGLE_ORDER_Order_items_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface SINGLE_ORDER_Order_items_photo {
  __typename: "ProductImage";
  image: SINGLE_ORDER_Order_items_photo_image | null;
}

export interface SINGLE_ORDER_Order_items {
  __typename: "OrderItem";
  id: string;
  name: string | null;
  description: string | null;
  price: number | null;
  quantity: number | null;
  photo: SINGLE_ORDER_Order_items_photo | null;
}

export interface SINGLE_ORDER_Order {
  __typename: "Order";
  id: string;
  charge: string | null;
  total: number | null;
  user: SINGLE_ORDER_Order_user | null;
  items: SINGLE_ORDER_Order_items[];
}

export interface SINGLE_ORDER {
  /**
   *  Search for the Order item with the matching ID. 
   */
  Order: SINGLE_ORDER_Order | null;
}

export interface SINGLE_ORDERVariables {
  id: string;
}
