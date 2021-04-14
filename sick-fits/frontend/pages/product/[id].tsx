import { useRouter } from "next/router";
import { Product } from "../../components/Product";

export const ProductPage = () => {
  const { query } = useRouter();
  const id = query.id as string;

  return <Product id={id} />;
};

export default ProductPage;
