import { useMutation } from "@apollo/client";
import { RESET_PASSWORD_MUTATION } from "../graphql/mutations/resetPassword";
import {
  RESET_PASSWORD,
  RESET_PASSWORDVariables,
} from "../graphql/mutations/types/RESET_PASSWORD";
import { useForm } from "../lib/useForm";
import { ErrorMessage } from "./ErrorMessage";
import Form from "./styles/Form";

export const ResetPassword = ({ token }: { token: string }) => {
  const { inputs, handleChange, resetForm } = useForm<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const [resetPassword, { data, loading, error: resetError }] = useMutation<
    RESET_PASSWORD,
    RESET_PASSWORDVariables
  >(RESET_PASSWORD_MUTATION, {
    variables: { ...inputs, token },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await resetPassword().catch(console.error);
    resetForm();
  };
  const error = data?.redeemUserPasswordResetToken?.code
    ? data.redeemUserPasswordResetToken
    : undefined;

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Reset Your Password</h2>
      <ErrorMessage error={resetError || error} />
      <fieldset disabled={loading} aria-busy={loading}>
        {data?.redeemUserPasswordResetToken === null && (
          <p>Success! You can now sign in</p>
        )}
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
        <button type="submit">Reset</button>
      </fieldset>
    </Form>
  );
};
