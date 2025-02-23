import { createContext, ProviderProps } from "react";

const ejemploContext =  createContext('julian');

const exampleProvider = (props: ProviderProps<string>) => {
   const nombre = "Julian"
   return (
      <ejemploContext.Provider value = {nombre}>
         {props.children}
      </ejemploContext.Provider>
   )
}

export default {exampleProvider, ejemploContext}