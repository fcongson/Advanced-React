import { useQuery } from "@apollo/client";
import Head from "next/head";
import styled from "styled-components";
import { PRODUCT_QUERY } from "../graphql/queries/product";
import { PRODUCT, PRODUCTVariables } from "../graphql/queries/types/PRODUCT";
import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const Product = ({ id }: { id: string }) => {
  const { data, loading, error } = useQuery<PRODUCT, PRODUCTVariables>(
    PRODUCT_QUERY,
    {
      variables: {
        id,
      },
    }
  );
  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  const { Product } = data;
  const { photo } = Product;

  return (
    <ProductStyles>
      <Head>
        <title>Sick Fits | {Product.name}</title>
      </Head>
      <img src={photo.image.publicUrlTransformed} alt={photo.altText} />
      <div className="details">
        <h2>{Product.name}</h2>
        <p>{Product.description}</p>
      </div>
    </ProductStyles>
  );
};
