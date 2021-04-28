import { useRouter } from "next/router";
import { RequestResetPassword } from "../components/RequestResetPassword";
import { ResetPassword } from "../components/ResetPassword";

const ResetPage = () => {
  const { query } = useRouter();
  const token = query.token as string;
  if (!token) {
    return (
      <div>
        <p>Sorry you must supply a token</p>
        <RequestResetPassword />
      </div>
    );
  }
  return <ResetPassword token={token} />;
};

export default ResetPage;
