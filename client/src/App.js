import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, Switch} from "react-router-dom"

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import Home from './components/Home.js'


function App() {
  return (
    <div className="App">
      <AppBar position="static" style={{backgroundColor: "pink"}}>
        <Tabs value="" onChange="" aria-label="simple tabs example" >
        
        <Link><Tab label="Home" /></Link>

          <Link><Tab label="" /></Link>
          <Link><Tab label=" Locations" /></Link>
          <Tab label="" />
         <Link> <Tab label="Gallery" /></Link>
          <Tab label="" />
         <Link> <Tab label="Services" /></Link>
         <Tab label="" />
         <Link> <Tab label="Contact" /></Link>
          
        </Tabs>
      </AppBar>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/locations" component={Locations}/> */}
      </Switch>
    </div>
  );
}

export default App;
