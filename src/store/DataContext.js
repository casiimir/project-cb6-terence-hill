import { createContext, useState, useEffect } from "react";
import { fetchItems } from "@/utils/http.js";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      const data = await fetchItems();
      setItems(data);
    }
    getItems();
  }, []);

  return <DataContext.Provider value={items}>{children}</DataContext.Provider>;
};
