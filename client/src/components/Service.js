import React, { Component } from 'react'
import axios from 'axios';
import { Redirect, Link } from "react-router-dom"
import Specialists from './Specialists';
import Options from './Options';

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
    
            getServiceOptionsFromServer = () => 
            axios.get(`/api/options/`)
                .then((res) => {
                    const options = res.data.filter(option => option.service === this.state.service.id)
                    this.setState({ options })
                })
        

    componentDidMount() {
        this.getServiceFromServer()
            .then(this.getServiceSpecialistsFromServer())
            .then(this.getServiceOptionsFromServer())
        
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
   

// componentDidMount() {
//     this.getServiceFromServer()
//         .then(this.getServiceOptionsFromServer())
    
// }

    handleDeleteOption = (optionId) => {
        axios.delete(`/api/options/${optionId}/`)
            .then(() => this.getServiceOptionsFromServer())
    }


    render() {
        if (this.state.redirectToHome) {
            return <Redirect to="/services" />
        }
        return (
            <div>
               
                <p>{this.state.service.name}</p>
                <button onClick={this.handleDeleteService}>Delete Service</button>
                <Link to={`/services/${this.state.service.id}/specialists/new`}>
                    <button >Add a Specialist</button></Link>

                    <Link to={`/services/${this.state.service.id}/options/new`}>
                    <button >Add New Option</button></Link>

                {Specialists(this.state.specialists, this.handleDeleteSpecialist)}
                {Options(this.state.options, this.handleDeleteOption)}
            </div>
        )
    }
}

export default Service;