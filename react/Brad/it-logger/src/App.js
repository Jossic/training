import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddLogModal from './components/logs/AddLogModal';
import AddTechModal from './components/techs/AddTechModal';
import EditLogModal from './components/logs/EditLogModal';


import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import AddBtn from './components/layout/AddBtn';
import TechListModal from './components/techs/TechListModal';



const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>

    </Fragment>
  );
}

export default App;
