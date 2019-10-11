import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Options = (optionsList, handleDeleteOption, service) => (

    <div>
       
        <div class="optionss">
       
        <div className="listspecial">
            {optionsList.map(option => (
                <div>

                    <div>{option.name}</div>
                    <div><img src={option.photo_url} /></div>
                    <div>{option.description}</div>
                    <div>{option.price}</div>

                    
                    <button onClick={() => handleDeleteOption(option.id)}>Delete</button>  
                </div>
              
            )
            )}
              </div>
        </div>
        <Link to={`/services/${service.id}/options/new`}>
                <button >Add  New Option</button></Link>
    </div>
);

export default Options;