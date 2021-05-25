import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { UPDATE_PRODUCT_MUTATION } from "../graphql/mutations/updateProduct";
import { ALL_PRODUCTS_QUERY } from "../graphql/queries/allProducts";
import { PRODUCT_QUERY } from "../graphql/queries/product";
import { PRODUCT, PRODUCTVariables } from "../graphql/queries/types/PRODUCT";
import { useForm } from "../lib/useForm";
import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";
import Form from "./styles/Form";

export const UpdateProduct = ({ id }) => {
  const { data, error, loading } = useQuery<PRODUCT, PRODUCTVariables>(
    PRODUCT_QUERY,
    {
      variables: { id },
    }
  );

  const { inputs, handleChange, clearForm } = useForm<{
    name: string;
    price: number;
    description: string;
  }>(
    data?.Product ?? {
      name: "",
      price: 0,
      description: "",
    }
  );

  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION, {
    variables: {
      id,
      name: inputs.name,
      price: inputs.price,
      description: inputs.description,
    },
    refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
  });

  if (loading) return <Loading />;

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        await updateProduct();
      }}
    >
      <ErrorMessage error={error || updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Product</button>
      </fieldset>
    </Form>
  );
};
