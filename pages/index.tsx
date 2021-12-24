import Head from "next/head";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div>
      <Head>
        <title>Lewandy Diloné</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
