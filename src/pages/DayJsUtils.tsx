import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/es";

const DayJsUtils = () => {
  const navigate = useNavigate();
  const fecha = new Date();
  dayjs.locale("es");

  const navigateToForm = () => {
    return navigate("/utils");
  };

  return (
    <>
      <div>DayJsUtils</div>
      <button onClick={navigateToForm} className="buttons button is-primary">
        Atras
      </button>
      <hr />
      <h1>Dayjs</h1>
      <h3>Formatear Fecha</h3>
      <ul>
        <li>Fecha: {fecha.toString()}</li>
        <li>
          Fecha: {dayjs(fecha).format("dddd")} {dayjs(fecha).format("DD")}
          {dayjs(fecha).format("MMMM")} of {dayjs(fecha).format("YYYY")} a las
          {dayjs(fecha).format("HH:mm:ss")}
        </li>
        <li>Fecha corta: {dayjs(fecha).format("DD/MM/YYYY")}</li>
      </ul>
      <h3>Calculo con fecha</h3>
      <ul>
        <li>
          Fecha + 7 dias: {dayjs(fecha).add(7, "day").format("DD/MM/YYYY")}
        </li>
      </ul>
    </>
  );
};

export default DayJsUtils;
