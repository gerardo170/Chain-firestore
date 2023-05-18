import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {collection, getDocs, getDoc, deleteDoc,doc} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const ShowTrack = () => {
 const [tracks, setTracks] = useState( [] ) 
 const TracksCollection = collection(db, "tracks")
 const getTracks = async () => {
    const data = await getDocs (TracksCollection) 

 setTracks(
    data.docs.map( (doc) => ({...doc.data(), id:doc.id}))
 )
 console.log(data.docs)
 }

 const deleteTrack = async (id) => {
    const TrackDato = doc(db, "tracks", id)
    await deleteDoc(TrackDato)
    getTracks()
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

        deleteTrack(id)
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'  
        )
      }
    })
 }

 useEffect( () => {
    getTracks()
 },[] )
 
 const [term2, setTerm2] = React.useState("");

 function searchingTrack(term2){
    return function(x){
        return x.numpedidoTrac?.includes(term2) || !term2;
    };
 }

 return (
    <>
    <div className='container'>
     <div className='row'>
        <div className='col'>
          <div className='d-grid gap-3'>
            {tracks && (
                  <input 
                  className="Search"
                  name="term2"
                  onChange={e => setTerm2(e.target.value)}
                  placeholder="Buscar Por Numero de Pedido"
                  />
            )}
             <Link to="/CreateTrack" className='btn btn-secondary mt-2 mb-2'>Ingresar Tracking</Link>
             <table className='table table-dark table-hover'>

                <tbody>
                { tracks.filter(searchingTrack(term2)).map( (track) => (
                  <tr key={track.id}>
                     <ul>
                    <td><th>Numero De Pedido</th>{track.numpedidoTrac}</td>
                    <td><th>Tracking</th>{track.newTracking}</td>
                    <td><th>Empresa de envio</th>{track.newEmp}</td>
                    <td><th>Cantidad</th>{track.newCant}</td>
                    <td><th>Peso</th>{track.newPeso}</td>
                    <td><th>Costo</th>{track.newCosto}</td>
                    <td><th>Status</th>{track.NewStatus}</td>
                    </ul>
 
                   <ul>
                    <td><th>Tracking</th>{track.newTracking2}</td>
                    <td><th>Empresa de envio</th>{track.newEmp2}</td>
                    <td><th>Cantidad</th>{track.newCant2}</td>
                    <td><th>Peso</th>{track.newPeso2}</td>
                    <td><th>Costo</th>{track.newCosto2}</td>
                    <td><th>Status</th>{track.NewStatus2}</td>
                  </ul>

                  <ul>
                    <td><th>Tracking</th>{track.newTracking3}</td>
                    <td><th>Empresa de envio</th>{track.newEmp3}</td>
                    <td><th>Cantidad</th>{track.newCant3}</td>
                    <td><th>Peso</th>{track.newPeso3}</td>
                    <td><th>Costo</th>{track.newCosto3}</td>
                    <td><th>Status</th>{track.NewStatus3}</td>
                  </ul>

                  <ul>
                    <td><th>Tracking</th>{track.newTracking4}</td>
                    <td><th>Empresa de envio</th>{track.newEmp4}</td>
                    <td><th>Cantidad</th>{track.newCant4}</td>
                    <td><th>Peso</th>{track.newPeso4}</td>
                    <td><th>Costo</th>{track.newCosto4}</td>
                    <td><th>Status</th>{track.NewStatus4}</td>
                    </ul>

                  <ul>
                    <td><th>Tracking</th>{track.newTracking5}</td>
                    <td><th>Empresa de envio</th>{track.newEmp5}</td>
                    <td><th>Cantidad</th>{track.newCant5}</td>
                    <td><th>Peso</th>{track.newPeso5}</td>
                    <td><th>Costo</th>{track.newCosto5}</td>
                    <td><th>Status</th>{track.NewStatus5}</td>
                    <Link to={`../EditTrack/${track.id}`} className="btn btn-light">Editar</Link>
                      <button onClick={ ()=> { confirmDelete(track.id) } } className="btn btn-danger">X</button>
                  </ul>
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

export default ShowTrack