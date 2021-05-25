import { useQuery } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loading } from "../components/Loading";
import OrderItemStyles from "../components/styles/OrderItemStyles";
import {
  USER_ORDERS,
  USER_ORDERS_allOrders,
} from "../graphql/queries/types/USER_ORDERS";
import { USER_ORDERS_QUERY } from "../graphql/queries/userOrdersQuery";
import { formatMoney } from "../lib/formatMoney";

const OrderUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 4rem;
`;

const countItemsInAnOrder = (order: USER_ORDERS_allOrders) =>
  order.items.reduce((tally, item) => tally + item.quantity, 0);

const pluralize = (count: number) => (count === 1 ? "s" : "");

const OrderPage = () => {
  const { data, loading, error } = useQuery<USER_ORDERS>(USER_ORDERS_QUERY);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  const { allOrders } = data;

  return (
    <>
      <Head>
        <title>Sick Fits - Your Orders ({allOrders.length})</title>
      </Head>
      <h2>
        You have {allOrders.length} order{pluralize(allOrders.length)}!
      </h2>
      <OrderUl>
        {allOrders.map((order) => (
          <OrderItemStyles>
            <Link href={`/order/${order.id}`}>
              <a>
                <div className="order-meta">
                  <p>
                    {countItemsInAnOrder(order)} Item
                    {pluralize(countItemsInAnOrder(order))}
                  </p>
                  <p>
                    {order.items.length} Product{pluralize(order.items.length)}
                  </p>
                  <p>{formatMoney(order.total)}</p>
                </div>
                <div className="images">
                  {order.items.map((item) => (
                    <img
                      key={item.id}
                      src={item.photo?.image?.publicUrlTransformed}
                      alt={item.name}
                    />
                  ))}
                </div>
              </a>
            </Link>
          </OrderItemStyles>
        ))}
      </OrderUl>
    </>
  );
};

export default OrderPage;
