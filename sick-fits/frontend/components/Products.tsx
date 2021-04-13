import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { ALL_PRODUCTS_QUERY } from "../graphql/queries/allProducts";
import { ALL_PRODUCTS } from "../graphql/queries/types/ALL_PRODUCTS";
import { ProductCard } from "./ProductCard";

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export const Products = () => {
  const { data, error, loading } = useQuery<ALL_PRODUCTS>(ALL_PRODUCTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ProductsListStyles>
      {data.allProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductsListStyles>
  );
};
