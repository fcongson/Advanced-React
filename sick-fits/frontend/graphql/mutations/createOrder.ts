import gql from "graphql-tag";

export const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;
