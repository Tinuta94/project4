import React, { Component } from 'react'
import axios from 'axios';
import {Redirect} from "react-router-dom"

class Service extends Component {
    state = {
        service: {},
        specialists: [],
        options: [],
        redirectToHome: false
    }
    addService = () => {
            axios.get(`/api/services/${this.props.match.params.id}/`)
            .then((res) => {
            this.setState({
                service: res.data,
                specialists: res.data.specialists,
                options: res.data.options})
        })
    };
    

    handleDeleteService = () => {
        axios.delete(`/api/services/${this.props.match.params.id}/`, this.state.service)
        .then(() => {
            this.setState({
                redirectToHome: true
            })
        })
    }


    render() {
        if(this.state.redirectToHome) {
            return <Redirect to="/services" />
        }
        return (
            <div>
                <p>kfklfd</p>
                  <p>{this.state.service.name}</p>
                  <button onClick={this.handleDeleteService}>Delete Service</button>
            </div>
        )
        }
    }

export default Service;