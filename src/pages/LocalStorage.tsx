import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LocalStorage = () => {
  const navigate = useNavigate();
   const [existe, setExiste] = useState((localStorage.getItem('tokenLocal') !== null ? 1 : 0));

   const handleCrear = () => {
      localStorage.setItem('tokenLocal', '1dd34f46yh5');
      Swal.fire({
         icon: 'success',
         title: 'OK',
         text: 'Se creo el token correctamente'
      });
      setExiste(1)
   }

   const handleBorrar = () => {
      localStorage.removeItem('tokenLocal');
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
      <br />
      <button className="buttons button is-info" onClick={handleCrear}>Crear localstorage</button>
      {existe === 1 && (
         <>
            <p>El valor es: {localStorage.getItem('tokenLocal')}</p>
         <br />
         <button className="buttons button is-danger" onClick={handleBorrar}>Borrar localstorage</button>
         </>

      )}
    </>
  );
};

export default LocalStorage;
