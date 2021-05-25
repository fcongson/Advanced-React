/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: USER_ORDERS
// ====================================================

export interface USER_ORDERS_allOrders_user {
  __typename: "User";
  id: string;
}

export interface USER_ORDERS_allOrders_items_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface USER_ORDERS_allOrders_items_photo {
  __typename: "ProductImage";
  image: USER_ORDERS_allOrders_items_photo_image | null;
}

export interface USER_ORDERS_allOrders_items {
  __typename: "OrderItem";
  id: string;
  name: string | null;
  description: string | null;
  price: number | null;
  quantity: number | null;
  photo: USER_ORDERS_allOrders_items_photo | null;
}

export interface USER_ORDERS_allOrders {
  __typename: "Order";
  id: string;
  charge: string | null;
  total: number | null;
  user: USER_ORDERS_allOrders_user | null;
  items: USER_ORDERS_allOrders_items[];
}

export interface USER_ORDERS {
  /**
   *  Search for all Order items which match the where clause. 
   */
  allOrders: (USER_ORDERS_allOrders | null)[] | null;
}
