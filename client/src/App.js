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
import Location  from './components/Location.js'
import Gallery from './components/Gallery.js'
import Services from './components/Services.js'
import Contact from './components/Contact.js'


function App() {
  return (
    <div className="App">
      <AppBar position="static" style={{backgroundColor: "black"}}>
        <Tabs value="" onChange="" aria-label="simple tabs example" >
        
        <Link to="/" class="link"><Tab label="Home" /></Link>

          <Link ><Tab label="" /></Link>
          <Link to="/location" class="link"><Tab label=" Locations" /></Link>
          <Tab label="" />
         <Link to="/gallery" class="link"> <Tab label="Gallery" /></Link>
          <Tab label="" />
         <Link  to="/services" class="link"> <Tab label="Services" /></Link>
         <Tab label="" />
         <Link to="/contact" class="link"> <Tab label="Contact" /></Link>
          
        </Tabs>
      </AppBar>
      <Switch>
        <Route exact path="/" component={Home} />
         <Route exact path="/location" component={Location}/> 
         <Route exact path="/gallery" component={Gallery}/>
         <Route exact path="/services" component={Services}/>
         <Route exact path="/contact" component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
