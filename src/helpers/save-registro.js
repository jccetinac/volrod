import { db } from "../firebase/firebase-config";



export const saveRegistro = async (nombre, puesto, idPersonal) => {
   
const respuesta = await db.collection("personas").doc(idPersonal).set({
    nombre: nombre,
    puesto: puesto,
    idpersonal: idPersonal
});

   return respuesta;
}

