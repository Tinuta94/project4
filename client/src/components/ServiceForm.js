import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class ServiceForm extends Component {
    state = {
        service: {
            name: "",
            photo_url: ""
        },
        redirectToHome: false
    }


    handleChange = (evnt) => {
        let newService = { ...this.state.service };

        newService[evnt.target.name] = evnt.target.value
        this.setState({ service: newService })
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

            <div class="servform">

                <form onSubmit={this.handleSubmit}>
                    <div class="sname">
                        <TextField
                            id="outlined-name"
                            label="Name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.service.name}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div class="simage">
                        <TextField

                            label="Image URL"

                            type="img"
                            name="photo_url"
                            onChange={this.handleChange}
                            value={this.state.service.photo_url}
                            autoComplete="url"
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div class="sbutton">
                        <Button variant="contained" type="submit" >
                            Submit</Button>

                    </div>
                </form>
                <div class="servback"> </div>
            </div>

        )

    }

}
export default ServiceForm;