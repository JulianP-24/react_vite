import { Link } from "react-router-dom";

const Forms = () => {
  return (
    <>
      <h1>Forms</h1>
      <ul className="breadcrumb" aria-label="breadcrumbs">
        <li>
          <Link aria-current="page" to="/formulario-simple">Simple form</Link>
        </li>
      </ul>
    </>
  );
};

export default Forms;
