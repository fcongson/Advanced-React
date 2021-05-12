/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SEARCH_PRODUCTS
// ====================================================

export interface SEARCH_PRODUCTS_allProducts_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface SEARCH_PRODUCTS_allProducts_photo {
  __typename: "ProductImage";
  image: SEARCH_PRODUCTS_allProducts_photo_image | null;
}

export interface SEARCH_PRODUCTS_allProducts {
  __typename: "Product";
  id: string;
  name: string | null;
  photo: SEARCH_PRODUCTS_allProducts_photo | null;
}

export interface SEARCH_PRODUCTS {
  /**
   *  Search for all Product items which match the where clause. 
   */
  allProducts: (SEARCH_PRODUCTS_allProducts | null)[] | null;
}

export interface SEARCH_PRODUCTSVariables {
  searchTerm: string;
}
