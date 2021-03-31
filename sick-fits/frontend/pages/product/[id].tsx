import { useRouter } from "next/router";
import { Product } from "../../components/Product";

export const ProductPage = () => {
  const { query } = useRouter();
  const id = Array.isArray(query.id) ? query.id[0] : query.id;

  return <Product id={id} />;
};

export default ProductPage;
