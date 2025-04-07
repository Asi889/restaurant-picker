import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import "../styles/globals.css";
import "../styles/trigerarm.css";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(1111111111111111111);
  console.log(pageProps);
  // console.log(1111111111111111111);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
