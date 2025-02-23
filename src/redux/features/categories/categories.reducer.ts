import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { categories_interface, initialState } from "./categories.entity";


export const categoriesState = createSlice({
   name: "categoriesState",
   initialState,
   reducers: {
      fetchCategoriesSuccess(state, { payload }: PayloadAction<categories_interface[]>) {
         return {
            ...state,
            categoriesList: payload
         }
      }
   }
});

export const categoriesDataActions = categoriesState.actions;
export default categoriesState.reducer;