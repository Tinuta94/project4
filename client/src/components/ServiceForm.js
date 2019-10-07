import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Axios from 'axios';

 class ServiceForm extends Component {
    state = {
        newService: {
            name: "",
        },
        redirectToHome: false
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleChange = (evnt) => {
        let newService = { ...this.state };

        newService[evnt.target.name] = evnt.target.value
        this.setState(newService)
    }


handleSubmit = (evnt) => {
    evnt.preventDefault()

    Axios.post('/api/services/', this.state.newService)
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
            <input type="text" name="name" onChange={this.handleInput} value={this.state.name} />
            <input type="submit" value="Submit" />
        </form>
    )
}
 }
export default ServiceForm;