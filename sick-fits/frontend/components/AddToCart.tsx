import { useMutation } from "@apollo/client";
import { ADD_TO_CART_MUTATION } from "../graphql/mutations/addToCart";
import {
  ADD_TO_CART,
  ADD_TO_CARTVariables,
} from "../graphql/mutations/types/ADD_TO_CART";
import { CURRENT_USER_QUERY } from "../graphql/queries/currentUser";
import { useCart } from "../lib/cartState";

export const AddToCart = ({ id }: { id: string }) => {
  const [addToCart, { loading }] = useMutation<
    ADD_TO_CART,
    ADD_TO_CARTVariables
  >(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  const { openCart } = useCart();
  return (
    <button
      disabled={loading}
      type="button"
      onClick={() => {
        addToCart({ variables: { id } });
        setTimeout(openCart, 1000);
      }}
    >
      Add{loading && "ing"} To Cart 🛒
    </button>
  );
};
