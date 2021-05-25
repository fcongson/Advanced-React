import gql from "graphql-tag";

export const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER($id: ID!) {
    Order(where: { id: $id }) {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;
