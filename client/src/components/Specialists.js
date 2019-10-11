import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const Specialists = (specialistsList, handleDeleteSpecialist, service) => (

    <div>
      
        <div class="specialistss">
     
        <div class="listspecial">
            {specialistsList.map(specialist => (
                <div>
                   <div>
            <List>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={specialist.photo_url} />
              </ListItemAvatar>
              <ListItemText
                primary={specialist.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                    //   className={classes.inline}
                      color="textPrimary"
                    >
                     
                    </Typography>
                    {specialist.description}<br></br>

                  </React.Fragment>
                }
              />
          
            <Divider variant="inset" component="li" />
           
            </ListItem>
          </List>
          </div>
        
                     {/* <div>{specialist.name}</div>
                    <div><img src={specialist.photo_url} /></div>
                    <div>{specialist.description}</div>
                    <div>{specialist.email}</div> */}

                    
                    <button onClick={() => handleDeleteSpecialist(specialist.id)}>Delete</button>  

                    </div>

                    
            )
            )}
           
        </div>
       </div>

       <Link to={`/services/${service.id}/specialists/new`}>
                <button >Add a Specialist</button></Link>

    </div>
);

export default Specialists;