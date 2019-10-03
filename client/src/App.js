import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route} from "react-router-dom"

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';



function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Tabs value="" onChange="" aria-label="simple tabs example" >
        
        <Tab label="Home" />
          <Link><Tab label="About Us" /></Link>
          <Tab label="" />
          <Tab label="Our Locations" />
          <Tab label="" />
          <Tab label="Gallery" />
          <Tab label="" />
          <Tab label="Our Services" />
          
        </Tabs>
      </AppBar>
      {/* <TabPanel value="" index={0}>
        Item One
      </TabPanel>
      <TabPanel value="" index={1}>
        Item Two
      </TabPanel>
      <TabPanel value="" index={2}>
        Item Three
      </TabPanel> */}
    </div>
  );
}

export default App;
