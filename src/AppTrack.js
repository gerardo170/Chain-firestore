import './App.css';
import ShowTrack from './componentes/ShowTrack';
import CreateTrack from './componentes/CreateTrack';
import EditTrack from './componentes/EditData';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

function AppTrack() {
 return (
    <div className='AppTrack'>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<ShowTrack/>} />
            <Route path='/CreateTrack' element={<CreateTrack/>} />
            <Route path='/EditTrack/:id2' element={<EditTrack/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default AppTrack;