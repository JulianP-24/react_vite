import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const SessionStorage = () => {
  const navigate = useNavigate();
  const [existe, setExiste] = useState((sessionStorage.getItem('tokenLocal') !== null ? 1 : 0));

   const handleCrear = () => {
      sessionStorage.setItem('tokenLocal', '1dd34f46yh5');
      Swal.fire({
         icon: 'success',
         title: 'OK',
         text: 'Se creo el token correctamente'
      });
      setExiste(1)
   }

   const handleBorrar = () => {
      sessionStorage.removeItem('tokenLocal');
      Swal.fire({
         icon: 'success',
         title: 'OK',
         text: 'Se borro el token correctamente'
      });
      setExiste(0)
   }
  return (
    <>
      <button
        onClick={() => navigate("/almacenamientoLocal")}
        className="buttons button is-primary"
      >
        Atras
      </button>
      <button className="buttons button is-info" onClick={handleCrear}>Crear sessionstorage</button>
      {existe === 1 && (
         <>
            <p>El valor es: {localStorage.getItem('tokenLocal')}</p>
         <br />
         <button className="buttons button is-danger" onClick={handleBorrar}>Borrar sessionstorage</button>
         </>

      )}
    </>
  );
};

export default SessionStorage;
