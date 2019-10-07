import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import axios from 'axios';

 class ServiceForm extends Component {
    state = {
        service: {
            name: "",
        },
        redirectToHome: false
    }


    handleChange = (evnt) => {
        let newService = { ...this.state.service };

        newService[evnt.target.name] = evnt.target.value
        this.setState({service: newService})
    }


handleSubmit = (evnt) => {
    evnt.preventDefault()

    axios.post('/api/services/', this.state.service)
        .then(() => {
            this.setState({
                redirectToHome: true
            })
        })
    }

render() {
    if (this.state.redirectToHome) {
        return <Redirect to="/services" />
    }
    return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" onChange={this.handleChange} value={this.state.service.name} />
            <input type="submit" value="Submit" />
        </form>
    )
}
 }
export default ServiceForm;