import { initialState } from "@/store/globalState";
import { mainReducer } from "@/store/reducer";
import "@/styles/globals.css";
import { DataContext } from "@/store/DataContext";
import { useReducer } from "react";
import { useEffect, useContext } from "react";
import { fetchItems } from "@/utils/http";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  useEffect(() => {
    fetchItems()
      .then((events) => dispatch({ type: "SAVE_DATA", payload: events }))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <DataContext.Provider value={state.fetchedData}>
        <Component {...pageProps} />
      </DataContext.Provider>
    </main>
  );
}
