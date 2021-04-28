/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PasswordResetRedemptionErrorCode } from "./../../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: RESET_PASSWORD
// ====================================================

export interface RESET_PASSWORD_redeemUserPasswordResetToken {
  __typename: "RedeemUserPasswordResetTokenResult";
  code: PasswordResetRedemptionErrorCode;
  message: string;
}

export interface RESET_PASSWORD {
  redeemUserPasswordResetToken: RESET_PASSWORD_redeemUserPasswordResetToken | null;
}

export interface RESET_PASSWORDVariables {
  email: string;
  token: string;
  password: string;
}
