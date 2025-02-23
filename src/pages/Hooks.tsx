import { Link } from "react-router-dom"


const Hooks = () => {
  return (
    <>
      <h1>Hooks</h1>
      <ul className="breadcrumb" aria-label="breadcrumbs">
        <li>
          <Link aria-current="page" to="/hooks/evento-click">Evento click</Link>
        </li>
      </ul>
    </>
  )
}

export default Hooks