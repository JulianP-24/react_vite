import { useLocation } from "react-router-dom";

const RutasQueryString = () => {
  const { search } = useLocation();
  const id = new URLSearchParams(search).get("id");
  return (
    <>
      <h1>Ejemplo parametros query string</h1>
      <ul>
        <li>ID: {id}</li>
      </ul>
    </>
  );
};

export default RutasQueryString;
