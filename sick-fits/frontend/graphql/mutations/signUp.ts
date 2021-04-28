import gql from "graphql-tag";

export const SIGN_UP_MUTATION = gql`
  mutation SIGN_UP($name: String!, $email: String!, $password: String!) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      id
      email
      name
    }
  }
`;
