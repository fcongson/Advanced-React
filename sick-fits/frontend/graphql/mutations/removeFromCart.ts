import gql from "graphql-tag";

export const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;
