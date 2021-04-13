import { useRouter } from "next/router";
import { UpdateProduct } from "../components/UpdateProduct";

const UpdatePage = () => {
  const { query } = useRouter();
  return <UpdateProduct id={query.id} />;
};

export default UpdatePage;
