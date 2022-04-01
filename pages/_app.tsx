import { AppLayoutProps } from "next/app";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps }: AppLayoutProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
