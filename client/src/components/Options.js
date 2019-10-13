import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const Options = (optionsList, handleDeleteOption, service) => (

    <div>

        <div class="specialistsss">
            <Link to={`/services/${service.id}/options/new`}>
                <Button id="addspec">Add  New Option</Button></Link>
            <div className="listspecial">
                {optionsList.map(option => (
                    <div>
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={option.name}

                                    title={option.name}
                                    className="artist-photo"
                                    image={option.photo_url}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {option.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {option.description}
                                    </Typography>
                                    <Typography>{option.price}</Typography>
                                    <Button variant="contained" id="handeletetwo" onClick={() => handleDeleteOption(option.id)}>Delete</Button>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                        <div class="optionlist"></div>
                    </div>


                )
                )}
            </div>

        </div>

    </div>
);

export default Options;