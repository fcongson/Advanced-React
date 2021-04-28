import { useMutation } from "@apollo/client";
import { REQUEST_RESET_PASSWORD_MUTATION } from "../graphql/mutations/requestResetPassword";
import {
  REQUEST_RESET_PASSWORD,
  REQUEST_RESET_PASSWORDVariables,
} from "../graphql/mutations/types/REQUEST_RESET_PASSWORD";
import { useForm } from "../lib/useForm";
import { ErrorMessage } from "./ErrorMessage";
import Form from "./styles/Form";

export const RequestResetPassword = () => {
  const { inputs, handleChange, resetForm } = useForm<{
    email: string;
  }>({
    email: "",
  });
  const [requestResetPassword, { data, error }] = useMutation<
    REQUEST_RESET_PASSWORD,
    REQUEST_RESET_PASSWORDVariables
  >(REQUEST_RESET_PASSWORD_MUTATION, {
    variables: inputs,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await requestResetPassword().catch(console.error);
    resetForm();
  };

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Request To Reset Your Password</h2>
      <ErrorMessage error={error} />
      <fieldset>
        {data?.sendUserPasswordResetLink === null && (
          <p>Success! Checkyour email for a link!</p>
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
        <button type="submit">Request Reset</button>
      </fieldset>
    </Form>
  );
};
