import Link from "next/link";
import { SignOut } from "../components/SignOut";
import { useCart } from "../lib/cartState";
import { useUser } from "../lib/useUser";
import { CartCount } from "./CartCount";
import NavStyles from "./styles/NavStyles";

export const Nav = () => {
  const user = useUser();
  const { openCart } = useCart();
  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <SignOut>Sign Out</SignOut>
          <button type="button" onClick={openCart}>
            My Cart{" "}
            <CartCount
              count={user.cart.reduceRight(
                (tally, cartItem) =>
                  tally + (cartItem.product ? cartItem.quantity : 0),
                0
              )}
            />
          </button>
        </>
      )}
      {!user && <Link href="/signin">Sign In</Link>}
    </NavStyles>
  );
};
