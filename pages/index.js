import Head from "next/head";
import Image from "next/image";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to the Chronologue</title>
        <meta
          name="description"
          content="The Chronologue - a mock tool for documentation purpose"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Header />
      </Layout>
    </div>
  );
}
