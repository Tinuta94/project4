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
import Button from '@material-ui/core/Button';

const Specialists = (specialistsList, handleDeleteSpecialist, service) => (

  <div>


    <div class="specialistss">
      <Link to={`/services/${service.id}/specialists/new`}>
        <Button id="addspec">Add a Specialist</Button></Link>
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
                        <br></br>
                        {specialist.email}

                      </React.Fragment>
                    }
                  />

                  <Divider variant="inset" component="li" />

                </ListItem>
              </List>
            </div>
            <Button variant="contained" id="handelete" onClick={() => handleDeleteSpecialist(specialist.id)}>Delete</Button>

          </div>
        )
        )}

      </div>
    </div>



  </div>
);

export default Specialists;