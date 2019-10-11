import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from './components/Home.js';
import Location  from './components/Location.js';
import Gallery from './components/Gallery.js';
import Contact from './components/Contact.js';
import ListofServices from './components/ListofServices.js';
import Service from './components/Service.js';
import ServiceForm from './components/ServiceForm.js';
import Specialists from './components/Specialists.js';
import SpecialistsForm from './components/SpecialistsForm.js';
import Options from './components/Options.js';
import OptionsForm from './components/OptionsForm.js'


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
         <Route path="/services/addnew" component={ServiceForm} />
         <Route path="/services/:id/specialists/new" component={SpecialistsForm}/>
         <Route path="/services/:id/options/new" component={OptionsForm}/>
         <Route path="/services/:id/options" component={Options}/>
         <Route path="/services/:id/specialists" component={Specialists}/>
         <Route path="/services/:id" component={Service}/>
         <Route exact path="/services" component={ListofServices}/>
         {/* <Route path="/services/:id/options/new" component={OptionsForm}/> */}
         <Route exact path="/contact" component={Contact}/>
     
      </Switch>
    </div>
  );
}

export default App;
