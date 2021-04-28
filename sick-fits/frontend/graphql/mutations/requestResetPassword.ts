import gql from "graphql-tag";

export const REQUEST_RESET_PASSWORD_MUTATION = gql`
  mutation REQUEST_RESET_PASSWORD($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;
