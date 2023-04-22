import { initialState } from "@/store/globalState";
import { mainReducer } from "@/store/reducer";
import { DataContext, CartContext } from "@/store/DataContext";
import { useReducer, useState, useEffect, createContext } from "react";
import { fetchItems } from "@/utils/http";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const [nameContext, setNameContext] = useState([]);

  useEffect(
    () =>
      setNameContext(
        typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem("event"))
          : []
      ),
    []
  );

  useEffect(() => {
    fetchItems()
      .then((events) => dispatch({ type: "SAVE_DATA", payload: events }))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className={montserrat.className}>
      <DataContext.Provider value={{ state, dispatch }}>
        <CartContext.Provider value={{ nameContext, setNameContext }}>
          <Component {...pageProps} />
        </CartContext.Provider>
      </DataContext.Provider>
    </main>
  );
}
