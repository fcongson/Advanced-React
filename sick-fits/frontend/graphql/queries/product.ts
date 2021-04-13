import gql from "graphql-tag";

export const PRODUCT_QUERY = gql`
  query PRODUCT($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      price
      description
      photo {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;
