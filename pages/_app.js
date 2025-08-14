import "@/styles/globals.css";
import {ShowContextProvider,EventContextProvider, InfoContextProvider} from "@/public/conext";

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
