import { Link } from "react-router-dom"

const AlmacenamientoLocal = () => {
  return (
    <>
      <h1>Almacenamiento Local</h1>
      <ul className="breadcrumb" aria-label="breadcrumbs">
        <li>
          <Link aria-current="page" to="/localStorage">local storage</Link>
        </li>
        <li>
          <Link aria-current="page" to="/sessionStorage">session storage</Link>
        </li>
      </ul>
    </>
  )
}

export default AlmacenamientoLocal