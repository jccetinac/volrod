import React, { useEffect, useState } from 'react';
import { loadRegistros } from '../../helpers/load-registros';
import { Link } from 'react-router-dom';



export const Lista = () => {

   const [listado, setListado] = useState([]);

    useEffect( async() => {
        const datosPersonas = await loadRegistros();
        setListado(datosPersonas);        
    }, [])

  return (
    <div className="container">
            
      <div className="card p-5 mt-5">
        <div className="row header">
          <div className="col-md-6">
            <h1 className="text-danger  mt-3">DASHBOARD</h1>
          </div>
          <div className="col-md-6 derecha">
           <Link to={ "/" } className="btn btn-danger mt-3"  >IR AL FORMULARIO</Link>

          </div>
        </div>

        <div className="row bg-danger text-white">
          <div className="col-md-4">
            <p className=" mt-3">NOMBRE COMPLETO</p>
          </div>

          <div className="col-md-4 text-center">
            <p className=" mt-3">PUESTO</p>
          </div>

          <div className="col-md-4 text-right">
            <p className=" mt-3">ID PERSONAL</p>
          </div>
        </div>

        {listado.map((item) => (
          <div key={item.idpersonal} className="row datos">
            <div className="col-md-4">
              <p className=" mt-3">{item.nombre}</p>
            </div>

            <div className="col-md-4 text-center">
              <p className=" mt-3">{item.puesto}</p>
            </div>

            <div className="col-md-4 text-right">
              <p className=" mt-3">{item.idpersonal}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
