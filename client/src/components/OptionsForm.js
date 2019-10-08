import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

 class OptionsForm extends Component {
    state = {
        newOption: {
            service: this.props.match.params.id,
            name: "",
            photo_url: "",
            description: "",
            price:""
        },
        redirectToHome: false
    }


    handleChange = (evnt) => {
        let allnewOptions = {...this.state.newOption}

        allnewOptions[evnt.target.name] = evnt.target.value
        this.setState({ newOption: allnewOptions })
    }

    handleSubmit = (evnt) => {
        evnt.preventDefault()

        axios.post('/api/options/', this.state.newOption)
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
                 <form onSubmit={this.handleSubmit}>
                     <input type="text" name="name" label="name" onChange={this.handleChange} value={this.state.newOption.name}/>
                     <input type="img" name="photo_url" label="image_url" onChange={this.handleChange} value={this.state.newOption.photo_url}/>
                     <input type="text" name="description" onChange={this.handleChange} value={this.state.newOption.description}/>
                     <input type="text" name="price" label="price" onChange={this.handleChange} value={this.state.newOption.price}/>
                    <input type="submit" value="Submit"/>
                 </form>
                
            </div>
        )
    }
}
export default OptionsForm;