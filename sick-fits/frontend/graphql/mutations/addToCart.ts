import gql from "graphql-tag";

export const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;
