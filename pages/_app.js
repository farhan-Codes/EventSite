import "@/styles/globals.css";
import {ShowContextProvider,EventContextProvider} from "@/public/conext";

export default function App({ Component, pageProps }) {
  return (
    <ShowContextProvider>
      <EventContextProvider>
        <Component {...pageProps} />
      </EventContextProvider>
    </ShowContextProvider>
  )
}
