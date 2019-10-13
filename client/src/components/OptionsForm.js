import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class OptionsForm extends Component {
    state = {
        newOption: {
            service: this.props.match.params.id,
            name: "",
            photo_url: "",
            description: "",
            price: ""
        },
        redirectToHome: false
    }


    handleChange = (evnt) => {
        let allnewOptions = { ...this.state.newOption }

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
        if (this.state.redirectToHome) {
            return <Redirect to={`/services/${this.props.match.params.id}`} />
        }
        return (

            <div class="opcontainer">
                <form onSubmit={this.handleSubmit}>
                    <div class="opfirst">
                        <TextField
                            id="outlined-name"
                            label="Name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.newOption.name}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div class="optwo">
                        <TextField
                            id="outlined-uncontrolled"
                            label="Description"
                            name="description"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.newOption.description}
                            margin="normal"
                            variant="outlined"

                        />
                    </div>
                    <div class="opthree">
                        <TextField
                            // id="outlined-email-input"
                            label="Price"
                            type="price"
                            name="price"
                            onChange={this.handleChange}
                            value={this.state.newOption.price}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div class="opfour">
                        <TextField
                            label="Image URL"
                            type="img"
                            name="photo_url"
                            onChange={this.handleChange}
                            value={this.state.newOption.photo_url}
                            autoComplete="url"
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div class="opfive">
                        <Button variant="contained" type="submit" >
                            Submit</Button>
                    </div>

                </form>
                <div class="servbackone"> </div>
            </div>
        )
    }
}
export default OptionsForm;