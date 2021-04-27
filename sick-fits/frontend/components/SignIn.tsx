import { useMutation } from "@apollo/client";
import { SIGN_IN_MUTATION } from "../graphql/mutations/signIn";
import { SIGN_IN, SIGN_INVariables } from "../graphql/mutations/types/SIGN_IN";
import { CURRENT_USER_QUERY } from "../graphql/queries/currentUser";
import { useForm } from "../lib/useForm";
import { ErrorMessage } from "./ErrorMessage";
import Form from "./styles/Form";

export const SignIn = () => {
  const { inputs, handleChange, resetForm } = useForm<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const [signIn, { data }] = useMutation<SIGN_IN, SIGN_INVariables>(
    SIGN_IN_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn();
    resetForm();
  };
  const error =
    data?.authenticateUserWithPassword.__typename ===
    "UserAuthenticationWithPasswordFailure"
      ? data?.authenticateUserWithPassword
      : undefined;

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Sign Into Your Account</h2>
      <ErrorMessage error={error} />
      <fieldset>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign In</button>
      </fieldset>
    </Form>
  );
};
