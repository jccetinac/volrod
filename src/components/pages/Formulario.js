import React, { useState } from 'react';
import { saveRegistro } from '../../helpers/save-registro';
import { Link } from 'react-router-dom';

export const Formulario = () => {
  const [nombre, setNombre] = useState('');

  const [idpersonal, setIdpersonal] = useState();

  const [puesto, setPuesto] = useState('gerente');

  const [guardado, setGuardado] = useState('');

  const handleChangeNombre = event => {
    setNombre(event.target.value);
  };

  const handleChangeId = event => {
    setIdpersonal(event.target.value);
  };

  const handleChangePuesto = event => {
    setPuesto(event.target.value);
  };

  const enviar = async () => {
    try{
     await saveRegistro(nombre, puesto, idpersonal);
      setGuardado('exito');
      setTimeout(()=>{ setGuardado(''); }, 3000);

    }
    catch(error){
      setGuardado('error');
      console.log(error);
    }

  };

  return (
    <div className="container">
      <div className="row">

        <div className="card p-5 miformulario">
        <Link to={ "/lista" } className="btn btn-danger back-button derecha"  >IR AL DASHBOARD</Link>

          <h2 className="text-danger">INGRESE SUS DATOS</h2>
          <p className="text-danger">NOMBRE COMPLETO</p>
          <input
            className="form-control mb-2"
            type="text"
            value={nombre}
            onChange={handleChangeNombre}
            placeholder="Nombre"
          />
          <p className="text-danger">PUESTO</p>
          <select className="form-control mb-2" onChange={handleChangePuesto} value={puesto}>
            <option  value="gerente">
              Gerente
            </option>
            <option value="subgerente">Subgerente</option>
            <option value="encargado">Encargado</option>
            <option value="personal de planta">Personal de planta</option>
          </select>
          <p className="text-danger">ID PERSONAL</p>
          <h6 className="text-danger">(*solo numeros)</h6>
          <input
            className="form-control mb-2"
            type="text"
            maxLength="5"
            minLength="5"
            value={idpersonal}
            onChange={handleChangeId}
            placeholder="Id personal"
          />

          <a className="btn btn-danger mb-2" onClick={()=> {enviar()} }>
            Envíar
          </a>
        </div>
      </div>

        { guardado ==='error'? 
            (<div className="card bg-danger error p-3 text-white">HUBO UN ERROR</div>):
            guardado ==='exito' ? (<div className="card bg-success exito p-3 text-white">CARGADO EXITOSAMENTE</div>) : ''
        }
      
      
    </div>
  );
}
