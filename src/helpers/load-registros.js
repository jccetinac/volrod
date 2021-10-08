import { db } from "../firebase/firebase-config";

export const loadRegistros = async () => {
   const indicadoresSnap = await db.collection(`/personas`).get();
   
   const indicadores = [];
   indicadoresSnap.forEach( snapChild => {
        indicadores.push({
            id: snapChild.id,
            ...snapChild.data()
        });
   }); 

   return indicadores;
}