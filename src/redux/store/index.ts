import { configureStore } from "@reduxjs/toolkit";
import procedenciaReducer from './../features/ProcedenciaSlice'
import categoriesState from './../features/categories/categories.reducer';

export const store = configureStore({
   reducer:{
      procedencia: procedenciaReducer,
      categoriesState: categoriesState
   }
})

export type RootState = ReturnType<typeof store.getState>;