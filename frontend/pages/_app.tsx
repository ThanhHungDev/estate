import '../styles/antd.css'
import '../styles/app.css'
// import "antd/dist/antd.css"


import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
