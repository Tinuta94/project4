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

const Specialists = (specialistsList, handleDeleteSpecialist) => (

    <div>
        <h3>Specialists</h3>
        <div className="listspecial">
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
                    {specialist.description}<br></br>
                    {specialist.description}
                  </React.Fragment>
                }
              />
            {/* </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={specialist.name} src={specialist.photo_url} />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                    //   className={classes.inline}
                      color="textPrimary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem> */}
            <Divider variant="inset" component="li" />
            {/* <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src={specialist.photo_url} />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                    //   className={classes.inline}
                      color="textPrimary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              /> */}
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
);

export default Specialists;