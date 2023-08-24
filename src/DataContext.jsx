import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [responseData, setResponseData] = useState([]);

  return (
    <DataContext.Provider value={{ responseData, setResponseData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
