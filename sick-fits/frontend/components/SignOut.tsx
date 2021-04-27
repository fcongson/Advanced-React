import { useMutation } from "@apollo/client";
import { SIGN_OUT_MUTATION } from "../graphql/mutations/signOut";
import { SIGN_OUT } from "../graphql/mutations/types/SIGN_OUT";
import { CURRENT_USER_QUERY } from "../graphql/queries/currentUser";

export const SignOut: React.FunctionComponent = ({ children }) => {
  const [signOut] = useMutation<SIGN_OUT>(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  const handleClick = () => {
    signOut();
  };
  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
};
