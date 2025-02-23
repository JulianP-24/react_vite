import { Link } from "react-router-dom";

const HooksEventoClick = () => {
  const handleClick = () => {
    alert("alerta!!!!")
  }

  return (
    <>
      <nav className="breadcrumb" aria-label="breadcrumbs">
          <li>
            <Link aria-current="page" to="/hooks">Hooks</Link>
          </li>
          <li>Evento Click</li>
      </nav>
      <br />
      <h3>Click</h3>
      <button className="buttons button is-primary" onClick={handleClick}>Clickkkkk</button>
    </>
  );
};

export default HooksEventoClick;
