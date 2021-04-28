import styled from "styled-components";
import { RequestResetPassword } from "../components/RequestResetPassword";
import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SignUp";

const SignInPageStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 4rem;
`;

const SignInPage = () => (
  <SignInPageStyles>
    <SignIn />
    <SignUp />
    <RequestResetPassword />
  </SignInPageStyles>
);

export default SignInPage;
