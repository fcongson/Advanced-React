/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CURRENT_USER
// ====================================================

export interface CURRENT_USER_authenticatedItem {
  __typename: "User";
  id: string;
  email: string | null;
  name: string | null;
}

export interface CURRENT_USER {
  authenticatedItem: CURRENT_USER_authenticatedItem | null;
}
