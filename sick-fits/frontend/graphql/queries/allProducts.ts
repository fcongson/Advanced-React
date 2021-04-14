import gql from "graphql-tag";

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS($skip: Int = 0, $first: Int) {
    allProducts(skip: $skip, first: $first) {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
