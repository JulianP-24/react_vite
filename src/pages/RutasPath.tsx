import { useParams } from "react-router-dom";

const RutasPath = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Ejemplo parametros</h1>
      <ul>
        <li>ID: {id}</li>
      </ul>
    </>
  );
};

export default RutasPath;
