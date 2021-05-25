import { useUser } from "../lib/useUser";
import SignInPage from "../pages/signin";

export const PleaseSignIn: React.FunctionComponent = ({ children }) => {
  const me = useUser();
  if (!me) return <SignInPage />;
  return children;
};
