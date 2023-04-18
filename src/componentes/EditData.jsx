import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"
import { Link } from 'react-router-dom'
import { async } from "@firebase/util"


const EditData = () => {
  const [numpedido, Setnumpedido] = useState('');
  const [date, setDate] = useState('');
  const [nombre, setNombre] = useState('');
  const [selectedOption2,setSelectedOption2] = useState('');
  const [selectedOption,setSelectedOption] = useState('');
  const [monto1, setMonto1] = useState('');
  const [Tasa1, setTasa1] = useState('');
  const [subtotal, setSubtotal] = useState('');
  const [monto2, setMonto2] = useState('');
  const [total1, setTotal1] = useState('');
  const [abono, setAbono] = useState('');
  const [total2, setTotal2] = useState('');

  const navigate = useNavigate()
  const {id} = useParams()

  const update = async (e) => {
      e.preventDefault()
      const dato = doc(db, "datos", id)
      const data = {numpedido,date,nombre,selectedOption,selectedOption2,monto1,
        Tasa1,subtotal,monto2,total1,abono,total2}
        await updateDoc(dato, data)
        navigate('/')
  }

  const getDatosById = async (id) => {
   const dato = await getDoc(doc(db, "datos", id) )
   if(dato.exists()) {
    //  console.log(dato.data())
    Setnumpedido(dato.data().numpedido)
    setDate(dato.data().date)
    setNombre(dato.data().nombre)
    setSelectedOption(dato.data().selectedOption)
    setSelectedOption2(dato.data().selectedOption2)
    setMonto1(dato.data().monto1)
    setTasa1(dato.data().Tasa1)
    setSubtotal(dato.data().subtotal)
    setMonto2(dato.data().monto2)
    setTotal1(dato.data().total1)
    setAbono(dato.data().abono)
    setTotal2(dato.data().total2)
   }else{
      console.log('el producto no existe')
   }
  }

  useEffect( () => {
     getDatosById(id)
  }, [])
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  }
  
  const handleSelectChange2 = (event) => {
    setSelectedOption2(event.target.value);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
         <h1>Editar Usuario</h1>

         <form onSubmit={update}>
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
                    <button type='submit' className='btn btn-primary'>Actualizar</button>
                    <Link to="/" className="btn btn-danger">Atras</Link>
                 </form> 
        </div>
      </div>
    </div>
  )
}

export default EditData