import { AppProps } from "next/app";

import { GlobalStyles } from "../components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
