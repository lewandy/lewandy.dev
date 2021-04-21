import '../styles/globals.css'

type Pros = {
  Component : any,
  pageProps: any
}

function MyApp({ Component, pageProps }: Pros) {
  return <Component {...pageProps} />
}

export default MyApp
