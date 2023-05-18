import React from "react";
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import SidebarDesign from '../src/SidebarDesign';
import App from './App';
import ShowData from "./componentes/ShowData";
import ShowTrack from "./componentes/ShowTrack";

function SideBar() {
    return (
        <Router>
      <div className="flex">
        <SidebarDesign />
        <div className="content w-100">
            <Routes>
                <Route path="/ShowData" exact={true} element={<ShowData/>}/>
                <Route path="/ShowTrack" exact={true} element={<ShowTrack/>}/>
            </Routes>
        </div>
      </div>
      </Router>
    );
}

export default SideBar;