import { useMutation } from "@apollo/client";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe, StripeError } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import { useState } from "react";
import styled from "styled-components";
import { CREATE_ORDER_MUTATION } from "../graphql/mutations/createOrder";
import {
  CREATE_ORDER,
  CREATE_ORDERVariables,
} from "../graphql/mutations/types/CREATE_ORDER";
import { CURRENT_USER_QUERY } from "../graphql/queries/currentUser";
import { useCart } from "../lib/cartState";
import SickButton from "./styles/SickButton";

const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

const CheckoutForm = () => {
  const [error, setError] = useState<StripeError>();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { closeCart } = useCart();
  const [checkout, { error: graphQLError }] = useMutation<
    CREATE_ORDER,
    CREATE_ORDERVariables
  >(CREATE_ORDER_MUTATION, { refetchQueries: [{ query: CURRENT_USER_QUERY }] });

  const handleSubmit = async (e) => {
    // 1. Stop the form from submitting and turn the loader on
    e.preventDefault();
    setLoading(true);
    // 2. Start the page transition
    nProgress.start();
    // 3. Create the payment method via stripe (Token comes back here if successful)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    console.log(paymentMethod);
    // 4. Handle any errors from stripe
    if (error) {
      setError(error);
      nProgress.done();
      return; // stops the checkout from happening
    }
    // 5. Send the token from step 3 to our keystone server, via a custom mutation
    const order = await checkout({ variables: { token: paymentMethod.id } });
    console.log("Finished with the order");
    console.log(order);
    // 6. Change the page to view the order
    router.push({
      pathname: "/order/[id]",
      query: { id: order.data.checkout.id },
    });
    // 7. Close the cart
    closeCart();
    // 8. Turn the loader off
    setLoading(false);
    nProgress.done();
  };

  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      {error && <p style={{ fontSize: 12 }}>{error.message}</p>}
      {graphQLError && <p style={{ fontSize: 12 }}>{graphQLError.message}</p>}
      <CardElement />
      <SickButton>Check Out Now</SickButton>
    </CheckoutFormStyles>
  );
};

export const Checkout = () => (
  <Elements stripe={stripeLib}>
    <CheckoutForm />
  </Elements>
);
