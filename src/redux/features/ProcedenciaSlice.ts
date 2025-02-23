import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   pais: "Colombia",
   ciudad: "Bogota"
}

export const procedenciaSlice = createSlice({
   name: "procedencia",
   initialState,
   reducers: {
      cambiarMexico: (state, datos) => {
         state.pais = datos.payload.pais,
         state.ciudad = "Ciudad de Mexico"
      }
   }
});

export const procedenciaActions = procedenciaSlice.actions;
export default procedenciaSlice.reducer;