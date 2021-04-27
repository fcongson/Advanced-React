import { StoreObject, useMutation } from "@apollo/client";
import React from "react";
import { DELETE_PRODUCT_MUTATION } from "../graphql/mutations/deleteProduct";
import {
  DELETE_PRODUCT,
  DELETE_PRODUCTVariables,
} from "../graphql/mutations/types/DELETE_PRODUCT";

const update = (cache: any, payload: any) => {
  const id = cache.identify({
    ...payload.data.deleteProduct,
  } as StoreObject);
  cache.evict(id);
  cache.gc();
};

export const DeleteProduct: React.FunctionComponent<{ id: string }> = ({
  id,
  children,
}) => {
  const [deleteProduct, { loading }] = useMutation<
    DELETE_PRODUCT,
    DELETE_PRODUCTVariables
  >(DELETE_PRODUCT_MUTATION, {
    variables: { id },
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
