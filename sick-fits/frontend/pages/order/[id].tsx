import { useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Loading } from "../../components/Loading";
import OrderStyles from "../../components/styles/OrderStyles";
import { SINGLE_ORDER_QUERY } from "../../graphql/queries/singleOrderQuery";
import {
  SINGLE_ORDER,
  SINGLE_ORDERVariables,
} from "../../graphql/queries/types/SINGLE_ORDER";
import { formatMoney } from "../../lib/formatMoney";

const SingleOrderPage = () => {
  const { query } = useRouter();
  const id = query.id as string;

  const { data, loading, error } = useQuery<
    SINGLE_ORDER,
    SINGLE_ORDERVariables
  >(SINGLE_ORDER_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  const { Order: order } = data;

  return (
    <OrderStyles>
      <Head>
        <title>Sick Fits - {order.id}</title>
      </Head>
      <p>
        <span>Order Id:</span>
        <span>{order.id}</span>
      </p>
      <p>
        <span>Charge:</span>
        <span>{order.charge}</span>
      </p>
      <p>
        <span>Total:</span>
        <span>{formatMoney(order.total)}</span>
      </p>
      <div className="items">
        {order.items.map((item) => (
          <div className="order-item" key={item.id}>
            <img src={item.photo.image.publicUrlTransformed} alt={item.name} />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>Qty: {item.quantity}</p>
              <p>Each: {formatMoney(item.price)}</p>
              <p>Sub Total: {formatMoney(item.price * item.quantity)}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </OrderStyles>
  );
};

export default SingleOrderPage;
