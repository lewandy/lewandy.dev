import '../styles/globals.css'

type AppComponentProps = {
  Component : any,
  pageProps: any
}

function MyApp({ Component, pageProps }: AppComponentProps) {
  return <Component {...pageProps} />
}

export default MyApp
