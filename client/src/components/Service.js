import React, { Component } from 'react'
import axios from 'axios';
import { Redirect, Link } from "react-router-dom"
import Specialists from './Specialists';

class Service extends Component {
    state = {
        service: {},
        specialists: [],
        options: [],
        redirectToHome: false
    }

    getServiceFromServer = () => 
        axios.get(`/api/services/${this.props.match.params.id}/`)
            .then((res) => {
                //this.state.specialists.filter(specialists => specialists.service === this.service.id)
                //     this.state.service.filter(service => service.options === this.service.id)
                this.setState({
                    service: res.data
                })
            })

    getServiceSpecialistsFromServer = () => 
        axios.get(`/api/specialists/`)
            .then((res) => {
                const specialists = res.data.filter(specialist => specialist.service === this.state.service.id)
                this.setState({ specialists })
            })

    componentDidMount() {
        this.getServiceFromServer()
            .then(this.getServiceSpecialistsFromServer())
        
    }


    handleDeleteService = () => {
        axios.delete(`/api/services/${this.props.match.params.id}/`, this.state.service)
            .then(() => {
                this.setState({
                    redirectToHome: true
                })
            })
    }

    handleDeleteSpecialist = (specialistId) => {
        axios.delete(`/api/specialists/${specialistId}/`)
            .then(() => this.getServiceSpecialistsFromServer())
    }


    render() {
        if (this.state.redirectToHome) {
            return <Redirect to="/services" />
        }
        return (
            <div>
                <p>kfklfd</p>
                <p>{this.state.service.name}</p>
                <button onClick={this.handleDeleteService}>Delete Service</button>
                <Link to={`/services/${this.state.service.id}/specialists/new`}>
                    <button >Add a Specialist</button></Link>
                {Specialists(this.state.specialists, this.handleDeleteSpecialist)}
            </div>
        )
    }
}

export default Service;