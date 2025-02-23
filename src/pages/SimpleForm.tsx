import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const SimpleForm = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');

  const navigateToForm = () => {
    return navigate("/forms");
  };

  const setName = (name: string) => {
    setNombre(name)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'OK',
      text: 'El nombre es ' + nombre
    })
  }

  return (
    <>
      <div>
        <h1>Simple Form</h1>
        <button onClick={navigateToForm} className="buttons button is-primary">
          Atras
        </button>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input has-background-dark" type="text" placeholder="Text input" value={nombre} onChange={(event) => setName(event.target.value)}/>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button className="button is-link is-light">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SimpleForm;
