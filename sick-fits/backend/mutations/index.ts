import { graphQLSchemaExtension } from "@keystone-next/keystone/schema";
import { addToCart } from "./addToCart";

// use this for vscode syntax highlighting
const graphql = String.raw;

export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    type Mutation {
      addToCart(productId: ID): CartItem
    }
  `,
  resolvers: {
    Mutation: {
      addToCart,
    },
  },
});
