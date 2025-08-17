import "@/styles/globals.css";
import {ShowContextProvider,EventContextProvider, InfoContextProvider} from "@/conext";

export default function App({ Component, pageProps }) {
  return (
    <ShowContextProvider>
      <EventContextProvider>
        <InfoContextProvider>
          <Component {...pageProps} />
        </InfoContextProvider>
      </EventContextProvider>
    </ShowContextProvider>
  )
}
