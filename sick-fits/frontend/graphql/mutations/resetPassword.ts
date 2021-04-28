import gql from "graphql-tag";

export const RESET_PASSWORD_MUTATION = gql`
  mutation RESET_PASSWORD(
    $email: String!
    $token: String!
    $password: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
  }
`;
