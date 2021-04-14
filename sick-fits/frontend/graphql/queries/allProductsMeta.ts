import gql from "graphql-tag";

export const ALL_PRODUCTS_META_QUERY = gql`
  query ALL_PRODUCTS_META {
    _allProductsMeta {
      count
    }
  }
`;
