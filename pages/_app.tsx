import '../styles/globals.css'
import '../styles/trigerarm.css'
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import {store} from '../src/redux/store'
import Layout from '../components/layout/Layout';
// import {RootState} from 


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
  </Provider>
  )
}

export default MyApp
