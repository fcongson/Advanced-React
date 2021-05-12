import { StoreObject, useMutation } from "@apollo/client";
import styled from "styled-components";
import { REMOVE_FROM_CART_MUTATION } from "../graphql/mutations/removeFromCart";
import {
  REMOVE_FROM_CART,
  REMOVE_FROM_CARTVariables,
} from "../graphql/mutations/types/REMOVE_FROM_CART";

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: var(--red);
    cursor: pointer;
  }
`;

const update = (cache: any, payload: any) => {
  const id = cache.identify({
    ...payload.data.deleteCartItem,
  } as StoreObject);
  cache.evict(id);
  cache.gc();
};

export const RemoveFromCart = ({ id }: { id: string }) => {
  const [removeFromCart, { loading }] = useMutation<
    REMOVE_FROM_CART,
    REMOVE_FROM_CARTVariables
  >(REMOVE_FROM_CART_MUTATION, {
    variables: { id },
    update,
    // optimisticResponse: {
    //   deleteCartItem: {
    //     __typename: "CartItem",
    //     id,
    //   },
    // },
  });
  return (
    <BigButton
      onClick={removeFromCart}
      disabled={loading}
      title="Remove This Item From The Cart"
    >
      &times;
    </BigButton>
  );
};
