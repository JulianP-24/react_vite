import { Link } from 'react-router-dom'

const Rutas = () => {
    let id=12;
  return (
    <>
        <h1>Rutas</h1>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about-us'>About us</Link>
            </li>
            <li>
                <Link to={`/rutas-path/${id}`}>Parametros path</Link>
            </li>
            <li>
                <Link to={`/rutas-query-string?id=${id}`}>Parametros path query string</Link>
            </li>
        </ul>
    </>
  )
}

export default Rutas