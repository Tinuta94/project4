import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Specialists = (specialistsList, handleDeleteSpecialist) => (

    <div>
        <h3>Specialists</h3>
        <div className="listspecial">
            {specialistsList.map(specialist => (
                <div>

                    <div>{specialist.name}</div>
                    <div><img src={specialist.photo_url} /></div>
                    <div>{specialist.description}</div>
                    <div>{specialist.email}</div>

                    
                    <button onClick={() => handleDeleteSpecialist(specialist.id)}>Delete</button>  
                </div>
            )
            )}
        </div>
    </div>
);

export default Specialists;