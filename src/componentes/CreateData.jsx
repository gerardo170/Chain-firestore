import React, { useState } from 'react'
import { useEffect } from "react";
import { useNavigate} from 'react-router-dom';
import { collection,addDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { db } from '../firebaseConfig/firebase'
// import { useHistory } from "react-router-dom";
// import { FormGroup,List,Form } from "reactstrap";


const CreateData = () => {
  const [numpedido, Setnumpedido] = useState('');
  const [date, setDate] = useState('');
  const [nombre, setNombre] = useState('');
  const [monto1, setMonto1] = useState('');
  const [Tasa1, setTasa1] = useState('');
  const [subtotal, setSubtotal] = useState('');
  const [monto2, setMonto2] = useState('');
  const [total1, setTotal1] = useState('');
  const [abono, setAbono] = useState('');
  const [total2, setTotal2] = useState('');
  const navigate = useNavigate()

  const [selectedOption,setSelectedOption] = useState('select1');

const handleSelectChange = (event) => {
  setSelectedOption(event.target.value);
}

const [selectedOption2,setSelectedOption2] = useState('select2');

const handleSelectChange2 = (event) => {
  setSelectedOption2(event.target.value);
}


   const DatosCollection = collection(db, "datos")

   const Guardar = async (e) => {
    e.preventDefault()
    await addDoc(DatosCollection, { numpedido:numpedido,date:date,nombre:nombre,selectedOption:selectedOption,
      selectedOption2:selectedOption2,monto1:monto1,
      Tasa1:Tasa1,subtotal:subtotal,monto2:monto2,total1:total1,abono:abono,total2:total2})}
      
      useEffect(() => {
        navigate('/CreateData')
      },[])

  // const [total, setTotal] = useState();
  // const [resta, setResta] = useState();
  
  //   const [numero, setnumero] = useState({
  //     MontoDeCompras:0,
  //     MontoDeEnvios:0,
  //     TasaVenta:0,
  //     abono:0
  //   });
  //   const [suma, setsuma] = useState();
    
  //   useEffect(() => {
  //     const {MontoDeCompras,TasaVenta,MontoDeEnvios,abono} = numero;
  //     setsuma(Number(MontoDeCompras)+Number(TasaVenta))
  //     setTotal(Number(suma)+Number(MontoDeEnvios));
  //     setResta(Number(abono)-Number(total));
  //   }, [numero,suma,total]);
  
  //   const sumar = (event)=>{
  //     const {name,value}=event.target;
  //     setnumero({...numero,[name]:value});
  //   }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
         <h1>Ingrese Usuario</h1>

         <form onSubmit={Guardar}>
                    <div className='mb-3'>
                      <label className='form-label'>numero de Pedido</label>
                 <input 
                  value={numpedido}
                  onChange={ (e)=> Setnumpedido(e.target.value)}
                  type="number"
                  className='form-control'
                 />
                    </div>  

                    <div className='mb-3'>
                      <label className='form-label'>Fecha:</label>
                 <input 
                  value={date}
                  onChange={ (e)=> setDate(e.target.value)}
                  type="date"
                  className='form-control'
                 />
                    </div>  

                    <div className='mb-3'>
                      <label className='form-label'>Cliente:</label>
                 <input 
                  value={nombre}
                  onChange={ (e)=> setNombre(e.target.value)}
                  type="text"
                  className='form-control'
                 />
                    </div>  
                       
                    <div className='mb-3'>
                      <label className='form-label'>Empresa de Envio</label>
                      <select value={selectedOption} name="Empresa_Envio" onChange={handleSelectChange}>
                      <option value="Select1">Seleccione</option> 
                      <option value="Fedex">Fedex</option>
                      <option value="DHL" >DHL</option>
                      <option value="LaserShip" >LaserShip</option>
                      <option value="UPS" >UPS</option>
                      <option value="USPS" >USPS</option>
                      <option value="Otros" >Otros...</option>
                    </select>
                    </div>  
                    

                    <div className='mb-3'>
                 <label className='form-label'>Currier:</label>
                 <select value={selectedOption2} onChange={handleSelectChange2}>
                 <option value="Select2">Seleccione</option> 
                 <option value="WM import">WM import</option>
                 </select>
                    </div> 

                    <div className='mb-3'>
                      <label className='form-label'>Monto de Compras</label>
                      <input 
                      value={monto1}
                      onChange={ (e)=> setMonto1(e.target.value)}
                      // value2={numero.MontoDeCompras}
                      // onChange2 = {sumar}
                      type="number"
                      className='form-control'
                      />
                    </div>  

                    <div className='mb-3'>
                      <label className='form-label'>Tasa de Venta</label>
                      <input 
                       value={Tasa1}
                       onChange={ (e)=> setTasa1(e.target.value)}
                      //  onChange2={sumar} 
                      //  value2={numero.TasaVenta}
                       type="number"
                       className='form-control'
                        />
                    </div> 

                      <div className='mb-3'>
                      <label className='form-label'>Subtotal</label>
                      <input 
                      value={subtotal}
                      onChange={ (e)=> setSubtotal(e.target.value)}
                      // value2={suma}
                      type="number"
                      className='form-control'
                      />
                    </div>   
                  
                    <div className='mb-3'>
                      <label className='form-label'>Monto de Envio:</label>
                      <input 
                      value={monto2}
                       onChange={ (e)=> setMonto2(e.target.value)}
                      //  onChange2= {sumar} 
                      //  value2={numero.MontoDeEnvios}
                       type="number"
                       className='form-control'
                       />
                    </div>  
                 
                    <div className='mb-3'>
                      <label className='form-label'>total</label>
                      <input 
                      value={total1}
                      onChange={ (e)=> setTotal1(e.target.value)}
                      // value2={total}
                      type="number"
                      className='form-control'
                      />
                    </div>  

                    <div className='mb-3'>
                      <label className='form-label'>Abono:</label>
                      <input 
                      value={abono}
                      onChange={ (e)=> setAbono(e.target.value)}
                      // onChange2={sumar} 
                      // value2={numero.abono}
                      type="number"
                      className='form-control'
                      />
                      </div>  

                    <div className='mb-3'>
                      <label className='form-label'>Total</label>
                      <input 
                      value={total2}
                      onChange={ (e)=> setTotal2(e.target.value)}
                      // value2={resta}
                      type="number"
                      className='form-control'
                      />
                    </div>  
                    <button type='submit' className='btn btn-primary'>Guardar</button>
                    <Link to="/" className="btn btn-danger">Atras</Link>
                 </form> 
        </div>
      </div>
    </div>
  )
}

export default CreateData