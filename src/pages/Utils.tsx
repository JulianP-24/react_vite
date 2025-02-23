import { Link } from "react-router-dom"

const Utils = () => {
  return (
    <>
      <h1>Utils</h1>
      <ul className="breadcrumb" aria-label="breadcrumbs">
        <li>
          <Link aria-current="page" to="/dayjsutils">Day js util</Link>
        </li>
      </ul>
    </>
  )
}

export default Utils