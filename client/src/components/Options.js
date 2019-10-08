import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Options = (optionsList, handleDeleteOption) => (

    <div>
        <h3>Options</h3>
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
);

export default Options;