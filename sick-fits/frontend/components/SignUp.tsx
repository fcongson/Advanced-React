import { useMutation } from "@apollo/client";
import { SIGN_UP_MUTATION } from "../graphql/mutations/signUp";
import { SIGN_UP, SIGN_UPVariables } from "../graphql/mutations/types/SIGN_UP";
import { useForm } from "../lib/useForm";
import { ErrorMessage } from "./ErrorMessage";
import Form from "./styles/Form";

export const SignUp = () => {
  const { inputs, handleChange, resetForm } = useForm<{
    name: string;
    email: string;
    password: string;
  }>({
    name: "",
    email: "",
    password: "",
  });
  const [signUp, { data, error }] = useMutation<SIGN_UP, SIGN_UPVariables>(
    SIGN_UP_MUTATION,
    {
      variables: inputs,
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp().catch(console.error);
    resetForm();
  };

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Sign Up For An Account</h2>
      <ErrorMessage error={error} />
      <fieldset>
        {data?.createUser && (
          <p>Signed up with {data.createUser.email} - Please Sign In</p>
        )}
        <label htmlFor="name">
          Your name
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            autoComplete="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
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
        <button type="submit">Sign Up</button>
      </fieldset>
    </Form>
  );
};
