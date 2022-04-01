import { AppLayoutProps } from "next/app";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppLayoutProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
