import Head from 'next/head';
import Header from '../components/Header';
import Home from '../components/Home';

export default function Layout() {
  return (
    <div>
      <Head>
        <title>Lewandy Diloné</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="home">
        <Header />
        <Home />
      </section>
    </div>
  );
}
