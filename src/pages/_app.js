import "@/styles/globals.css";
import { DataProvider } from "@/store/DataContext";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </main>
  );
}
