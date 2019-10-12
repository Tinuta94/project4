import React, { Component } from 'react'
import axios from 'axios';
import { Redirect, Link } from "react-router-dom"
import Specialists from './Specialists';
import Options from './Options';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class Service extends Component {
    state = {
        service: {},
        specialists: [],
        options: [],
        redirectToHome: false,
        isSpecialistsShown: false,
        isOptionsShown: false
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
            // .then(() => this.getServiceSpecialistsFromServer())
            .then(this.getServiceSpecialistsFromServer)
            .then(this.getServiceOptionsFromServer)
        
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
   

    handleDeleteOption = (optionId) => {
        axios.delete(`/api/options/${optionId}/`)
            .then(() => this.getServiceOptionsFromServer())
    }

    handleToggleSpecialists = () => {
        this.setState({isSpecialistsShown: true, isOptionsShown: false})
    }

    handleToggleOptions = () => {
        this.setState({isOptionsShown: true, isSpecialistsShown: false})
    }


    render() {
        if (this.state.redirectToHome) {
            return <Redirect to="/services" />
        }
        return (
            
            <div class="backserv">
              
               <div class="firstimgserv"></div>
                <p class="servnametwo">{this.state.service.name}</p>
                <hr></hr>
                 <div class="buttons">
                     <div class="click">
                <Button  onClick={this.handleDeleteService}>Delete Service</Button>
                </div>
                <div class="click">
                <Button  onClick={this.handleToggleSpecialists}>Specialists</Button>
                </div>
                <div class="click">
                <Button  onClick={this.handleToggleOptions}>Options</Button>
                </div>
                </div>
               
                <div class="empty"></div>
                {/* <Link to={`/services/${this.state.service.id}/specialists/new`}>
                    <button >Add a Specialist</button></Link> */}

                    {/* <Link to={`/services/${this.state.service.id}/options/new`}>
                    <button >Add New Option</button></Link> */}

                {   this.state.isSpecialistsShown 
                    ? Specialists(this.state.specialists, this.handleDeleteSpecialist, this.state.service)
                    : null
                }

                {   this.state.isOptionsShown 
                    ? Options(this.state.options, this.handleDeleteOption, this.state.service)
                    : null
                }
                
            </div>

        )
    }
}

export default Service;