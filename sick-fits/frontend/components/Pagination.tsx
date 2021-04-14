import { useQuery } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import { perPage } from "../config";
import { ALL_PRODUCTS_META_QUERY } from "../graphql/queries/allProductsMeta";
import { ALL_PRODUCTS_META } from "../graphql/queries/types/ALL_PRODUCTS_META";
import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";
import PaginationStyles from "./styles/PaginationStyles";

export const Pagination = ({ page }: { page: number }) => {
  const { data, loading, error } = useQuery<ALL_PRODUCTS_META>(
    ALL_PRODUCTS_META_QUERY
  );
  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage);
  return (
    <PaginationStyles>
      <Head>
        <title>
          Sick Fits - Page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page === 1}>← Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} Items Total</p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page === pageCount}>Next →</a>
      </Link>
    </PaginationStyles>
  );
};
