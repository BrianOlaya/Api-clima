import React, { useState } from "react";
import Error from './Error';
import PropTypes from 'prop-types'


const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {
  const { ciudad, pais } = busqueda;

  //defuniendo el state para el error
  const [error, guardarError] = useState(false);

  //funcion que pone los elemneto en el state
  const handleChange = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el usuario de click en submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //validar
    if (ciudad.trim() === "" || pais.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    //pasando al componete padre

    guardarConsultar(true);
  };

  return (
    <form onSubmit={handleSubmit}>
        {error ? <Error mensaje="Ambos campos son obligatorios"/>:null}
    
      <div className="input-field cols12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad">Ciudad: </label>
      </div>
      <div className="input-field cols12">
        <select name="pais" id="pais" value={pais} onChange={handleChange}>
          <option value="">--Seleccione un país--</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">País: </label>
      </div>
      <div className="input-field col s12">
        <button
          type="submit"
          className="waves-effect waves-light btn-large btn-block yellow accente-4 col s12"
        >
          Buscar Clima
        </button>
      </div>
    </form>
  );
};
Formulario.propTypes={
    busqueda:PropTypes.object.isRequired,
    guardarBusqueda:PropTypes.func.isRequired,
    guardarConsultar:PropTypes.func.isRequired
}

export default Formulario;
