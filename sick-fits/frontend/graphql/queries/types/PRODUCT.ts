/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PRODUCT
// ====================================================

export interface PRODUCT_Product_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface PRODUCT_Product_photo {
  __typename: "ProductImage";
  image: PRODUCT_Product_photo_image | null;
  altText: string | null;
}

export interface PRODUCT_Product {
  __typename: "Product";
  id: string;
  name: string | null;
  price: number | null;
  description: string | null;
  photo: PRODUCT_Product_photo | null;
}

export interface PRODUCT {
  /**
   *  Search for the Product item with the matching ID. 
   */
  Product: PRODUCT_Product | null;
}

export interface PRODUCTVariables {
  id: string;
}
