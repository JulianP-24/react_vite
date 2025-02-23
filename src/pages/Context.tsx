import { useContext } from "react"
import ejemploContext from "./../context/Provider"

const Context = () => {
   const nombre: string = useContext(ejemploContext.ejemploContext)
  return (
    <>
      <h1>Context ejemplo</h1>
      <p>valor: {nombre}</p>
    </>
  )
}

export default Context