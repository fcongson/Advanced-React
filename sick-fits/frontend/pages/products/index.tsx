import { useRouter } from "next/router";
import styled from "styled-components";
import { Pagination } from "../../components/Pagination";
import { Products } from "../../components/Products";

const ProductsPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductsPage = () => {
  const { query } = useRouter();
  const page = Number((query.page as string) ?? 1);

  return (
    <ProductsPageStyles>
      <Pagination page={page} />
      <Products page={page} />
      <Pagination page={page} />
    </ProductsPageStyles>
  );
};

export default ProductsPage;
