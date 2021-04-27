import gql from "graphql-tag";

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER {
    authenticatedItem {
      ... on User {
        id
        email
        name
        # TODO: Query the cart once we have it
      }
    }
  }
`;
