import styled, { createGlobalStyle } from "styled-components";
import { Header } from "./Header";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'silka';
    src: url('/static/silka-regular-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'silka';
    src: url('/static/silka-regularitalic-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'silkamono';
    src: url('/static/silkamono-regular-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    --red: rgb(200,90,90);
    --black: #393939;
    --white: #ffffff;
    --grey: #3a3a3a;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1200px;
    --bs: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
    --fontFamily: 'silka', 'silkamono', 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: var(--fontFamily);
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: var(--fontFamily);
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export const Page: React.FunctionComponent = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <InnerStyles>‍{children}</InnerStyles>
  </>
);
