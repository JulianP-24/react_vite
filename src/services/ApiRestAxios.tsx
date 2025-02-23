import axios from "axios";

const cabeceros = {
  "content-type": "application/json",
  Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzYsImlhdCI6MTczMTcyODAxNiwiZXhwIjoxNzM0MzIwMDE2fQ.5Lzesjr3i_QNUoYIRpUiZoKIHR6_DPzrF0XyR8-im9U",
};

const base_url = import.meta.env.VITE_API_URL;

export async function getCategorias() {
  const datos = await axios
    .get(`${base_url}/categorias`, {
      headers: cabeceros,
    })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        console.log("error al consultar");
      }
    })
    .catch((error) => {
      console.log("Fallo", error);
    });
  return datos;
}
