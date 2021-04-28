/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PasswordResetRequestErrorCode } from "./../../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: REQUEST_RESET_PASSWORD
// ====================================================

export interface REQUEST_RESET_PASSWORD_sendUserPasswordResetLink {
  __typename: "SendUserPasswordResetLinkResult";
  code: PasswordResetRequestErrorCode;
  message: string;
}

export interface REQUEST_RESET_PASSWORD {
  sendUserPasswordResetLink: REQUEST_RESET_PASSWORD_sendUserPasswordResetLink | null;
}

export interface REQUEST_RESET_PASSWORDVariables {
  email: string;
}
