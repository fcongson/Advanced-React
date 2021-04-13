import { useMutation } from "@apollo/client";
import Router from "next/router";
import { useEffect, useState } from "react";
import { CREATE_PRODUCT_MUTATION } from "../graphql/mutations/createProduct";
import {
  CREATE_PRODUCT,
  CREATE_PRODUCTVariables,
} from "../graphql/mutations/types/CREATE_PRODUCT";
import { ALL_PRODUCTS_QUERY } from "../graphql/queries/allProducts";
import { useForm } from "../lib/useForm";
import { ErrorMessage } from "./ErrorMessage";
import Form from "./styles/Form";

export const CreateProduct = () => {
  const { inputs, handleChange, clearForm } = useForm<{
    image?: File;
    name: string;
    price: number;
    description: string;
  }>({
    name: "",
    price: 0,
    description: "",
  });
  const [createProduct, { data, error, loading }] = useMutation<
    CREATE_PRODUCT,
    CREATE_PRODUCTVariables
  >(CREATE_PRODUCT_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
  });
  const [imageInputKey, setImageInputKey] = useState(Date.now());

  useEffect(() => {
    // In order to clear/reset the file input the input key needs to be updated when the input is empty
    if (!inputs.image?.name) {
      setImageInputKey(Date.now());
    }
  }, [inputs.image]);

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        await createProduct();
        clearForm();
        Router.push({
          pathname: `/product/${data.createProduct.id}`,
        });
      }}
    >
      <ErrorMessage error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="image">
          Image
          <input
            required
            key={imageInputKey}
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </label>
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
        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
};
