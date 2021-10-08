import React, { useState } from 'react';
import { saveRegistro } from '../../helpers/save-registro';
import { Link } from 'react-router-dom';
import { checkNumeros } from '../../helpers/check-numeros';

export const Formulario = () => {
  const [nombre, setNombre] = useState('');

  const [idpersonal, setIdpersonal] = useState();

  const [puesto, setPuesto] = useState('gerente');

  const [guardado, setGuardado] = useState('');

  const [errorInputNumero, setErrorInputNumero] = useState('');


  const handleChangeNombre = event => {
    const nombreSinNumeros= event.target.value.replace(new RegExp("[0-9]"), '');
    const nombreSinEspeciales = nombreSinNumeros.replace(/[^a-zA-Z0-9]/g, '');
    setNombre(nombreSinEspeciales);
  };

  const handleChangeId = event => {
    const idSinLetras= event.target.value.replace(new RegExp("[a-z]"), '');;
    setIdpersonal(idSinLetras);
  };

  const handleChangePuesto = event => {
    setPuesto(event.target.value);
  };

  const enviar = async () => {
    setErrorInputNumero(checkNumeros(idpersonal)); 

    if(errorInputNumero){
      try{
        await saveRegistro(nombre, puesto, idpersonal);
         setGuardado('exito');
       }
       catch(err){
         setGuardado(err);
       }
    }
    else{
      setGuardado('error');    
    }
    
    setTimeout(()=>{
       setGuardado('');
   }, 2000);

  };


  return (
    <div className="container">
      <div className="row">

        <div className="card p-5 miformulario">
        <Link to={ "/lista" } className="btn btn-danger back-button derecha"  >IR AL DASHBOARD</Link>

        <form>
            <h2 className="text-danger">INGRESE SUS DATOS</h2>
            <p className="text-danger">NOMBRE COMPLETO</p>
            <input
              className="form-control mb-2"
              type="text"
              value={nombre}
              onChange={handleChangeNombre}
              placeholder="Nombre"
              pattern="[a-z]{20}"
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
          </form>
        </div>
      </div>

        { guardado ==='error'? 
            (<div className="card bg-danger mensaje p-3 mt-2 text-white">
              <p>HUBO UN ERROR </p>
              {!errorInputNumero? <p>el ID solo puede tener números y debe tener 5 digitos</p>: ''}
              </div>):
            guardado ==='exito' ? (<div className="card bg-success mensaje p-3 mt-2 text-white">
              <p>CARGADO EXITOSAMENTE</p>
              </div>) : ''
        }
           
    </div>
  );
}
