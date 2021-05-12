import Link from "next/link";
import { ALL_PRODUCTS_allProducts } from "../graphql/queries/types/ALL_PRODUCTS";
import { formatMoney } from "../lib/formatMoney";
import { AddToCart } from "./AddToCart";
import { DeleteProduct } from "./DeleteProduct";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import Title from "./styles/Title";

export const ProductCard = ({
  product,
}: {
  product: ALL_PRODUCTS_allProducts;
}) => (
  <ItemStyles>
    <img src={product?.photo?.image?.publicUrlTransformed} alt={product.name} />
    <Title>
      <Link href={`/product/${product.id}`}>{product.name}</Link>
    </Title>
    <PriceTag>{formatMoney(product.price)}</PriceTag>
    <p>{product.description}</p>
    <div className="buttonList">
      <Link
        href={{
          pathname: "/update",
          query: {
            id: product.id,
          },
        }}
      >
        Edit
      </Link>
      <AddToCart id={product.id} />
      <DeleteProduct id={product.id}>Delete</DeleteProduct>
    </div>
  </ItemStyles>
);
