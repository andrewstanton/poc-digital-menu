import { AppProps } from "next/app";
import { AnimateSharedLayout } from "framer-motion";

import { GlobalStyles } from "../components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <GlobalStyles />
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}
