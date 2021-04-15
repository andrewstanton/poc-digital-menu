import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Head from "next/head";

interface ILayoutProps {
  children?: ReactNode;
  title?: string;
}

const Body = styled(motion.div)`
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
`;

export const Layout: React.FC<ILayoutProps> = ({
  children,
  title = "Digital Menu",
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Body>{children}</Body>
    </div>
  );
};
