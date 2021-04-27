import { useQuery } from "@apollo/client";
import { CURRENT_USER_QUERY } from "../graphql/queries/currentUser";
import { CURRENT_USER } from "../graphql/queries/types/CURRENT_USER";

export const useUser = () => {
  const { data } = useQuery<CURRENT_USER>(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
};
