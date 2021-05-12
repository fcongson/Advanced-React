/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CURRENT_USER
// ====================================================

export interface CURRENT_USER_authenticatedItem_cart_product_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface CURRENT_USER_authenticatedItem_cart_product_photo {
  __typename: "ProductImage";
  image: CURRENT_USER_authenticatedItem_cart_product_photo_image | null;
}

export interface CURRENT_USER_authenticatedItem_cart_product {
  __typename: "Product";
  id: string;
  price: number | null;
  name: string | null;
  description: string | null;
  photo: CURRENT_USER_authenticatedItem_cart_product_photo | null;
}

export interface CURRENT_USER_authenticatedItem_cart {
  __typename: "CartItem";
  id: string;
  quantity: number | null;
  product: CURRENT_USER_authenticatedItem_cart_product | null;
}

export interface CURRENT_USER_authenticatedItem {
  __typename: "User";
  id: string;
  email: string | null;
  name: string | null;
  cart: CURRENT_USER_authenticatedItem_cart[];
}

export interface CURRENT_USER {
  authenticatedItem: CURRENT_USER_authenticatedItem | null;
}
