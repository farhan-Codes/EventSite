import "@/styles/globals.css";
import {ShowContextProvider,EventContextProvider, InfoContextProvider} from "@/conext";

export default function App({ Component, pageProps }) {
  return (
    <InfoContextProvider>
    <Component {...pageProps} />
    </InfoContextProvider>
  )
}
