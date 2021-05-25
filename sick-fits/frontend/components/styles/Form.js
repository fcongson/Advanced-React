import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  border-radius: 2rem;
  background: var(--white);
  box-shadow: var(--bs);
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    font-family: var(--fontFamily);
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid var(--black);
    &:focus {
      outline: 0;
      border-color: var(--red);
    }
  }
  button,
  input[type="submit"] {
    width: auto;
    background: var(--red);
    color: var(--white);
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: "";
      display: block;
      background-image: linear-gradient(
        to right,
        var(--red) 0%,
        var(--offWhite) 50%,
        var(--red) 100%
      );
    }
    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
