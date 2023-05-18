import React, { useState } from 'react'
import { useEffect } from "react";
import { useNavigate} from 'react-router-dom';
import { collection,addDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { db } from '../firebaseConfig/firebase'
import { Button } from "reactstrap";

const CreateTrack = () => {
 const [numpedidoTrac, SetnumpedidoTrac] = useState('');
 const [newVia, SetnewVia] = useState('Seleccione Via');
 const [newTracking, SetnewTracking] = useState('');
 const [newEmp, SetnewEmp] = useState('Seleccione Empresa de envio');
 const [newCant, setNewcant] = useState('');
 const [newPeso, SetnewPeso] = useState('');
 const [newCosto, SetnewCosto] = useState('');
 const [NewStatus, SetNewStatus] = useState('Status');

 const [newTracking2, SetnewTracking2] = useState('');
 const [newEmp2, SetnewEmp2] = useState('Seleccione Empresa de envio');
 const [newCant2, setNewcant2] = useState('');
 const [newPeso2, SetnewPeso2] = useState('');
 const [newCosto2, SetnewCosto2] = useState('');
 const [NewStatus2, SetNewStatus2] = useState('Status');

 const [newTracking3, SetnewTracking3] = useState('');
 const [newEmp3, SetnewEmp3] = useState('Seleccione Empresa de envio');
 const [newCant3, setNewcant3] = useState('');
 const [newPeso3, SetnewPeso3] = useState('');
 const [newCosto3, SetnewCosto3] = useState('');
 const [NewStatus3, SetNewStatus3] = useState('');

 const [newTracking4, SetnewTracking4] = useState('');
 const [newEmp4, SetnewEmp4] = useState('Seleccione Empresa de envio');
 const [newCant4, setNewcant4] = useState('');
 const [newPeso4, SetnewPeso4] = useState('');
 const [newCosto4, SetnewCosto4] = useState('');
 const [NewStatus4, SetNewStatus4] = useState('Status');

 const [newTracking5, SetnewTracking5] = useState('');
 const [newEmp5, SetnewEmp5] = useState('Seleccione Empresa de envio');
 const [newCant5, setNewcant5] = useState('');
 const [newPeso5, SetnewPeso5] = useState('');
 const [newCosto5, SetnewCosto5] = useState('');
 const [NewStatus5, SetNewStatus5] = useState('Status');
 const navigate = useNavigate()

 const TracksCollection = collection(db, "tracks")

 const handleSelectVia = (event) => {
   SetnewVia(event.target.value);
 }

 const handleSelectEmp = (event) => {
   SetnewEmp(event.target.value);
 }

 const handleSelectStatus = (event) => {
   SetNewStatus(event.target.value);
 }

 const handleSelectEmp2 = (event) => {
   SetnewEmp2(event.target.value);
 }

 const handleSelectStatus2 = (event) => {
   SetNewStatus2(event.target.value);
 }

 const handleSelectEmp3 = (event) => {
   SetnewEmp3(event.target.value);
 }

 const handleSelectStatus3 = (event) => {
   SetNewStatus3(event.target.value);
 }
 
 const handleSelectEmp4 = (event) => {
   SetnewEmp4(event.target.value);
 }

 const handleSelectStatus4 = (event) => {
   SetNewStatus4(event.target.value);
 }

 const handleSelectEmp5 = (event) => {
   SetnewEmp5(event.target.value);
 }

 const handleSelectStatus5 = (event) => {
   SetNewStatus5(event.target.value);
 }



 const GuardarTrack = async (e) => {
    e.preventDefault()
    await addDoc(TracksCollection, { numpedidoTrac:numpedidoTrac,newVia:newVia,newTracking:newTracking,
        newEmp:newEmp,newCant:newCant,newPeso:newPeso,newCosto:newCosto,NewStatus:NewStatus,
        newTracking2:newTracking2,
        newEmp2:newEmp2,newCant2:newCant2,newPeso2:newPeso2,newCosto2:newCosto2,NewStatus2:NewStatus2,
        newTracking3:newTracking3,
        newEmp3:newEmp3,newCant3:newCant3,newPeso3:newPeso3,newCosto3:newCosto3,NewStatus3:NewStatus3,
        newTracking4:newTracking4,
        newEmp4:newEmp4,newCant4:newCant4,newPeso4:newPeso4,newCosto4:newCosto4,NewStatus4:NewStatus4,
        newTracking5:newTracking5,
        newEmp5:newEmp5,newCant5:newCant5,newPeso5:newPeso5,newCosto5:newCosto5,NewStatus5:NewStatus5
    })}

    function CalcularTrack1() {
      const Track1Calculado =
       newCant * newPeso;
      SetnewCosto(Track1Calculado)
     }

     function CalcularTrack2() {
      const Track2Calculado =
       newCant2 * newPeso2;
      SetnewCosto2(Track2Calculado)
     }

     function CalcularTrack3() {
      const Track3Calculado =
       newCant3 * newPeso3;
      SetnewCosto3(Track3Calculado)
     }

     function CalcularTrack4() {
      const Track4Calculado =
       newCant4 * newPeso4;
      SetnewCosto4(Track4Calculado)
     }

     function CalcularTrack5() {
      const Track5Calculado =
       newCant5 * newPeso5;
      SetnewCosto5(Track5Calculado)
     }

    useEffect(() => {
        navigate('/CreateTrack')
      },[])
      
    return (
        <div className='container'>
         <div className='row'>
            <div className='col'>
             <h1>Ingrese Tracking</h1>

             <form onSubmit={GuardarTrack}>
                 <div className='mb-3'>
                  <ul>
                    <label>Numero de pedido:</label>
                 <input 
                 onChange={(event) => {SetnumpedidoTrac(event.target.value)}} 
                 value={numpedidoTrac}
                 type="number"/>
                 </ul>
                 </div>
                 
                
                 <div className='mb-3'>
                 <ul>
                  <label>Via:</label>
                  <select  value={newVia} name="Empresa_Envio" onChange={handleSelectVia}>
                  <option value="Seleccione Via">Seleccione Via</option>
                  <option value='Maritima'>Maritima</option>
                  <option value= 'Aereo' >Aereo</option>
                  </select>
                  </ul>
                 </div>
                
                 <div className='mb-3'>
                 <ul>
                  <label>Tracking 1:</label>
                  <input type="Number" min={0} onChange={(event) => {SetnewTracking(event.target.value)}} value={newTracking}/>
                 </ul>
                 <ul>
                  <label>Tracking 2:</label>
                  <input type="Number" min={0} onChange={(event) => {SetnewTracking2(event.target.value)}} value={newTracking2}/>
                 </ul>
                 <ul>
                  <label>Tracking 3:</label>
                  <input type="Number" min={0} onChange={(event) => {SetnewTracking3(event.target.value)}} value={newTracking3}/>
                 </ul>
                 <ul>
                  <label>Tracking 4:</label>
                  <input type="Number" min={0} onChange={(event) => {SetnewTracking4(event.target.value)}} value={newTracking4}/>
                 </ul>
                 <ul>
                  <label>Tracking :5</label>
                  <input type="Number" min={0} onChange={(event) => {SetnewTracking5(event.target.value)}} value={newTracking5}/>
                </ul>
                 </div>

                 <div className='mb-3'>
                 <ul>
                    <label>Empresa Envio 1:</label>
                    <select onChange={handleSelectEmp} value={newEmp}>
                    <option value="Seleccione Empresa de envio">Seleccione Empresa de envio</option>
                    <option value="Fedex">Fedex</option>
                    <option value="DHL">DHL</option>
                    <option value="LaserShip">LaserShip</option>
                    <option value="UPS">UPS</option>
                    <option value="USPS">USPS</option>
                    <option value="Otros">Otros...</option>
                    </select>
                 </ul>
                 <ul>
                    <label>Empresa Envio 2:</label>
                    <select onChange={handleSelectEmp2} value={newEmp2}>
                    <option value="Seleccione Empresa de envio">Seleccione Empresa de envio</option>
                    <option value="Fedex">Fedex</option>
                    <option value="DHL">DHL</option>
                    <option value="LaserShip">LaserShip</option>
                    <option value="UPS">UPS</option>
                    <option value="USPS">USPS</option>
                    <option value="Otros">Otros...</option>
                    </select>
                  </ul>
                  <ul>
                    <label>Empresa Envio 3:</label>
                    <select onChange={handleSelectEmp3} value={newEmp3}>
                    <option value="Seleccione Empresa de envio">Seleccione Empresa de envio</option>
                    <option value="Fedex">Fedex</option>
                    <option value="DHL">DHL</option>
                    <option value="LaserShip">LaserShip</option>
                    <option value="UPS">UPS</option>
                    <option value="USPS">USPS</option>
                    <option value="Otros">Otros...</option>
                    </select>
                  </ul>
                  <ul>
                    <label>Empresa Envio 4:</label>
                    <select onChange={handleSelectEmp4} value={newEmp4}>
                    <option value="Seleccione Empresa de envio">Seleccione Empresa de envio</option>
                    <option value="Fedex">Fedex</option>
                    <option value="DHL">DHL</option>
                    <option value="LaserShip">LaserShip</option>
                    <option value="UPS">UPS</option>
                    <option value="USPS">USPS</option>
                    <option value="Otros">Otros...</option>
                    </select>
                  </ul>
                  <ul>
                    <label>Empresa Envio 5:</label>
                    <select onChange={handleSelectEmp5} value={newEmp5}>
                    <option value="Seleccione Empresa de envio">Seleccione Empresa de envio</option>
                    <option value="Fedex">Fedex</option>
                    <option value="DHL">DHL</option>
                    <option value="LaserShip">LaserShip</option>
                    <option value="UPS">UPS</option>
                    <option value="USPS">USPS</option>
                    <option value="Otros">Otros...</option>
                    </select>
                  </ul>
                 </div>

                 <div className='mb-3'>
                 <ul>
                   <label>Cantidad de Pieza 1:</label>
                   <input onChange={(event) => {setNewcant(event.target.value)}} value={newCant}/>
                   </ul>
                   <ul>
                   <label>Peso 1:</label>
                   <input onChange={(event) => {SetnewPeso(event.target.value)}} value={newPeso}/>
                   <Button onClick={CalcularTrack1}>Calcular</Button>
                   </ul>
                   <ul>
                   <label>Costo de Envio 1:</label>
                   <input onChange={(event) => {SetnewCosto(event.target.value)}} value={newCosto}/>
                   </ul>
                   <ul>
                   <label>Cantidad de Pieza 2 :</label>
                   <input onChange={(event) => {setNewcant2(event.target.value)}} value={newCant2}/>
                   </ul>
                   <ul>
                   <label>Peso 2:</label>
                   <input onChange={(event) => {SetnewPeso2(event.target.value)}} value={newPeso2}/>
                   <Button onClick={CalcularTrack2}>Calcular</Button>
                   </ul>
                   <label>Costo de Envio 2:</label>
                   <input onChange={(event) => {SetnewCosto2(event.target.value)}} value={newCosto2}/>
                   <ul>
                   <label>Cantidad de Pieza 3:</label>
                   <input onChange={(event) => {setNewcant3(event.target.value)}} value={newCant3}/>
                   </ul>
                   <ul>
                   <label>Peso 3:</label>
                   <input onChange={(event) => {SetnewPeso3(event.target.value)}} value={newPeso3}/>
                   <Button onClick={CalcularTrack3}>Calcular</Button>
                   </ul>
                   <ul>
                   <label>Costo de Envio 3:</label>
                   <input onChange={(event) => {SetnewCosto3(event.target.value)}} value={newCosto3}/>
                   </ul>
                   <ul>
                   <label>Cantidad de Pieza 4:</label>
                   <input onChange={(event) => {setNewcant4(event.target.value)}} value={newCant4}/>
                   </ul>
                   <ul>
                   <label>Peso 4:</label>
                   <input onChange={(event) => {SetnewPeso4(event.target.value)}} value={newPeso4}/>
                   <Button onClick={CalcularTrack4}>Calcular</Button>
                   </ul>
                   <ul>
                   <label>Costo de Envio 4:</label>
                   <input onChange={(event) => {SetnewCosto4(event.target.value)}} value={newCosto4}/>
                   </ul>
                   <ul>
                   <label>Cantidad de Pieza 5:</label>
                   <input onChange={(event) => {setNewcant5(event.target.value)}} value={newCant5}/>
                   </ul>
                   <ul>
                   <label>Peso 5:</label>
                   <input onChange={(event) => {SetnewPeso5(event.target.value)}} value={newPeso5}/>
                   <Button onClick={CalcularTrack5}>Calcular</Button>
                   </ul>
                   <ul>
                   <label>Costo de Envio 5:</label>
                   <input onChange={(event) => {SetnewCosto5(event.target.value)}} value={newCosto5}/>
                   </ul>
                 </div>

                 <div className='mb-3'>
                 <ul>
                  <label>Status 1:</label>
                  <select onChange={handleSelectStatus} value={NewStatus}>
                  <option selected value="Status">Status</option>
                  <option value="Sin Entregar"> Sin Entregar </option>
                  <option value="Entregado"> Entregado </option>
                  </select>
                  </ul>
                 <ul>
                  <label>Status 2:</label>
                  <select onChange={handleSelectStatus2} value={NewStatus2}>
                  <option selected value="Status">Status</option>
                  <option value="Sin Entregar"> Sin Entregar </option>
                  <option value="Entregado"> Entregado </option>
                  </select>
                  </ul>
                  <ul>
                  <label>Status 3:</label>
                  <select onChange={handleSelectStatus3} value={NewStatus3}>
                  <option selected value="Status">Status</option>
                  <option value="Sin Entregar"> Sin Entregar </option>
                  <option value="Entregado"> Entregado </option>
                  </select>
                  </ul>
                  <ul>
                  <label>Status 4:</label>
                  <select onChange={handleSelectStatus4} value={NewStatus4}>
                  <option selected value="Status">Status</option>
                  <option value="Sin Entregar"> Sin Entregar </option>
                  <option value="Entregado"> Entregado </option>
                  </select>
                  </ul>
                  <ul>
                  <label>Status 5:</label>
                  <select onChange={handleSelectStatus5} value={NewStatus5}>
                  <option selected value="Status">Status</option>
                  <option value="Sin Entregar"> Sin Entregar </option>
                  <option value="Entregado"> Entregado </option>
                  </select>
                  </ul>
                 </div>
                 <button type='submit' className='btn btn-primary'>Guardar</button>
                <Link to="/ShowTrack" className="btn btn-danger">Atras</Link>
             </form>
            </div>
         </div>
        </div>
    )
}

export default CreateTrack