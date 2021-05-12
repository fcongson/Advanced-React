import { CURRENT_USER_authenticatedItem_cart } from "../graphql/queries/types/CURRENT_USER";

export const calcTotalPrice = (cart: CURRENT_USER_authenticatedItem_cart[]) => {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.product) return; // Products can be deleted, but they could still be in your cart
    return tally + cartItem.product.price * cartItem.quantity;
  }, 0);
};
