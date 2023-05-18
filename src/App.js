
import './App.css';
import ShowData from './componentes/ShowData';
import CreateData from './componentes/CreateData';
import EditData from './componentes/EditData';
import ShowTrack from './componentes/ShowTrack';
import CreateTrack from './componentes/CreateTrack';
import EditTrack from './componentes/EditData';

import SidebarDesign from '../src/SidebarDesign';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="flex">
        <SidebarDesign />
        <div className="content w-100">
            <Routes>
                <Route path="/ShowData" exact={true} element={<ShowData/>}/>
                <Route path='/CreateData' element={ <CreateData/>} />
                <Route path='/EditData/:id' element={ <EditData/>} />
                <Route path="/ShowTrack" exact={true} element={<ShowTrack/>}/>
                <Route path='/CreateTrack' element={<CreateTrack/>} />
                <Route path='/EditTrack/:id' element={<EditTrack/>} />

            </Routes>
        </div>
      </div>
      </Router>
  );
}

export default App;
