import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {collection, getDocs, getDoc, deleteDoc,doc} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const ShowData = () => {
 const [datos, SetDatos] = useState( [] )
 const DatosCollection = collection(db, "datos")
 const getDatos = async () => {
 const data = await getDocs(DatosCollection)
//  console.log(data.docs)
SetDatos(
    data.docs.map( (doc) => ({...doc.data(), id:doc.id}))
)
console.log(data.docs)
 }

 const deleteDato = async (id) => {
   const DatoDoc = doc(db, "datos", id)
   await deleteDoc(DatoDoc)
   getDatos()
 }

 const confirmDelete = (id) => {
  Swal.fire({
    title: 'Deseas Borrarlo?',
    text: "No podras recuperarlo",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si!'
  }).then((result) => {
    if (result.isConfirmed) {

      deleteDato(id)
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
 }


 useEffect( () => {
    getDatos()
 },[] )

 function searchingData(term){
  return function(x){
    return x.numpedido.includes(term) || !term;
  };
 }

 const [term, setTerm] = React.useState("");
  return (
    <>
    <div className='container'>
     <div className='row'>
        <div className='col'>
            <div className='d-grid gap-2'>
              {datos && (
               <input 
               className="Search"
               name="term"
               onChange={e => setTerm(e.target.value)}
               placeholder="Buscar Por Numero de Pedido"
               />
              )}
                <Link to="/CreateData" className='btn btn-secondary mt-2 mb-2'>Ingresar Usuario</Link>
                <table className='table table-dark table-hover'>
                    <thead>
                        <tr>
                        <th>Numero De Pedido</th>
                        <th>Fecha</th>
                        <th>Cliente</th>
                        <th>Empresa de envio</th>
                        <th>Currier</th>
                        <th>Monto de compras</th>
                        <th>Tasa</th>
                        <th>Subtotal</th>
                        <th>Monto de envio</th>
                        <th>Total del envio</th>
                        <th>Abono</th>
                        <th>Total del abono</th>
                        </tr>
                    </thead>

                    <tbody>
                      
                      { datos.filter(searchingData(term)).map( (dato)  => (
                        <tr key={dato.id}>
                          <td>{dato.numpedido}</td>
                          <td>{dato.date}</td>
                          <td>{dato.nombre}</td>
                          <td>{dato.selectedOption}</td>
                          <td>{dato.selectedOption2}</td>
                          <td>{dato.monto1}</td>
                          <td>{dato.Tasa1}</td>
                          <td>{dato.subtotal}</td>
                          <td>{dato.monto2}</td>
                          <td>{dato.total1}</td>
                          <td>{dato.abono}</td>
                          <td>{dato.total2}</td>
                          <td>
                            <Link to={`../EditData/${dato.id}`} className="btn btn-light">Editar</Link>
                            <button onClick={ ()=> { confirmDelete(dato.id) } } className="btn btn-danger">X</button>
                          </td>
                        </tr>
                      )) }

                    </tbody>

                </table>
            </div>
        </div>
     </div>
    </div>
    </>
  )
}

export default ShowData