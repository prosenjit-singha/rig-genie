import store from "@/redux/store";
import "@/styles/globals.css";
import { Provider as StoreProvider } from "react-redux";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <StoreProvider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </StoreProvider>
  );
}
