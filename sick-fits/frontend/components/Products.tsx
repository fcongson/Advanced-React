import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { perPage } from "../config";
import { ALL_PRODUCTS_QUERY } from "../graphql/queries/allProducts";
import {
  ALL_PRODUCTS,
  ALL_PRODUCTSVariables,
} from "../graphql/queries/types/ALL_PRODUCTS";
import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";
import { ProductCard } from "./ProductCard";

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export const Products = ({ page = 1 }: { page: number }) => {
  const { data, error, loading } = useQuery<
    ALL_PRODUCTS,
    ALL_PRODUCTSVariables
  >(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <ProductsListStyles>
      {data?.allProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductsListStyles>
  );
};
