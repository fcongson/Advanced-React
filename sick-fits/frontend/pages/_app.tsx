import { ApolloClient, ApolloProvider } from "@apollo/client";
import { NextPageContext } from "next";
import { AppInitialProps, AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import React from "react";
import { Page } from "../components/Page";
import "../components/styles/nprogress.css";
import withData from "../lib/withData";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({
  Component,
  pageProps,
  apollo,
}: AppProps & { apollo: ApolloClient<any> }) => (
  <ApolloProvider client={apollo}>
    <Page>
      <Component {...pageProps} />
    </Page>
  </ApolloProvider>
);

MyApp.appGetInitialProps = async ({
  Component,
  ctx,
}): Promise<AppInitialProps> => {
  let pageProps: NextPageContext;
  if (Component.getIntialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
