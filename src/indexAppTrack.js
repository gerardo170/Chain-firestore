import React from 'react';
import ReactDOM from 'react-dom/client';
import SideBar from './SideBar';
import AppTrack from './AppTrack';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SideBar/>
    <AppTrack />
  </React.StrictMode>
);
