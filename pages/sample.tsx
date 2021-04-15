import React from "react";
import Link from "next/link";

import { Layout } from "../components";

const SamplePage: React.FC<{}> = () => (
  <Layout title="Menu View Example">
    <Link href="/">
      <a>Home</a>
    </Link>
  </Layout>
);

export default SamplePage;
