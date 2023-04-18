
import './App.css';
import ShowData from './componentes/ShowData';
import CreateData from './componentes/CreateData';
import EditData from './componentes/EditData';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
       <Route path='/' element={ <ShowData/>} />
       <Route path='/CreateData' element={ <CreateData/>} />
       <Route path='/EditData/:id' element={ <EditData/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
