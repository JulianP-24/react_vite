import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesDataActions } from "../redux/features/categories/categories.reducer";
import { listCategories } from "../redux/features/categories/categories.selector";
import { getCategorias } from "../services/ApiRestAxios";

const AxiosCategories = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const getCategories = useSelector(listCategories)

   useEffect(() => {
      listCategoriess();
   }, [])

   const navigateToAxiosPage = () => {
      return navigate("/axios");
    };

    const listCategoriess = async (): Promise<void> => {
      const datos = await getCategorias();
      dispatch(categoriesDataActions.fetchCategoriesSuccess(datos))   
    }
  return (
    <>
      <h1>Categorias</h1>
      <button onClick={navigateToAxiosPage} className="buttons button is-primary">
         Atras
      </button>
      <br />
      <Link to="/axios/categorias/add">Crear</Link>
      <br />
      <table>
         <thead>
            <tr>
               <th>ID</th>
               <th>Nombre</th>
               <th>Acciones</th>
            </tr>
         </thead>
         <tbody>
           {getCategories.map((dato) => (
            <tr key={dato.id}>
               <td>{dato.id}</td>
               <td>{dato.nombre}</td>
            </tr>
           ))}
         </tbody>
      </table>
    </>
  )
}

export default AxiosCategories