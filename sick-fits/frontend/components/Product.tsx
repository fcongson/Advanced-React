import Link from "next/link";
import formatMoney from "../lib/formatMoney";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import Title from "./styles/Title";
import { ALL_PRODUCTS_allProducts } from "./types/ALL_PRODUCTS";

export const Product = ({ product }: { product: ALL_PRODUCTS_allProducts }) => (
  <ItemStyles>
    <img src={product?.photo?.image?.publicUrlTransformed} alt={product.name} />
    <Title>
      <Link href={`product/${product.id}`}>{product.name}</Link>
    </Title>
    <PriceTag>{formatMoney(product.price)}</PriceTag>
    <p>{product.description}</p>
    {/* TODO Add buttons to edit and delete item */}
  </ItemStyles>
);
