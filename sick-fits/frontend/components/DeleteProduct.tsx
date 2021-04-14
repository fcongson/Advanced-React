import {
  ApolloCache,
  FetchResult,
  StoreObject,
  useMutation,
} from "@apollo/client";
import { DELETE_PRODUCT_MUTATION } from "../graphql/mutations/deleteProduct";
import {
  DELETE_PRODUCT,
  DELETE_PRODUCTVariables,
} from "../graphql/mutations/types/DELETE_PRODUCT";

const update = (
  cache: ApolloCache<DELETE_PRODUCT>,
  payload: FetchResult<DELETE_PRODUCT, Record<string, any>, Record<string, any>>
) => {
  cache.evict({
    id: cache.identify({
      __typename: payload.data.deleteProduct.__typename,
      id: payload.data.deleteProduct.id,
    } as StoreObject),
  });
};

export const DeleteProduct = ({ id, children }) => {
  const [deleteProduct, { loading }] = useMutation<
    DELETE_PRODUCT,
    DELETE_PRODUCTVariables
  >(DELETE_PRODUCT_MUTATION, {
    variables: {
      id,
    },
    update,
  });
  return (
    <button
      type="button"
      disabled={loading}
      onClick={() => {
        if (confirm("Are you sure you want to delete this item?")) {
          deleteProduct().catch((error) => alert(error.message));
        }
      }}
    >
      {children}
    </button>
  );
};
