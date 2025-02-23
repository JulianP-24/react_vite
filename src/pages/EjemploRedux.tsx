import { useDispatch, useSelector } from "react-redux";
import { procedenciaActions } from './../redux/features/ProcedenciaSlice'
import { RootState } from './../redux/store/index';

const EjemploRedux = () => {
   const procedencia = useSelector((state: RootState): {pais: string, ciudad: string} => state.procedencia)

   const dispatch = useDispatch();

   const handleChange = () => {
      dispatch(procedenciaActions.cambiarMexico({pais: 'chile'}));
   }
  return (
    <>
      <h1>Redux</h1>
      <h2>{procedencia.pais}</h2>
      <h2>{procedencia.ciudad}</h2>
      <br />
      <button className="buttons button is-primary" onClick={handleChange}>Cambiar a Mexico</button>
    </>
  )
}

export default EjemploRedux