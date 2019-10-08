import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


class SpecialistsForm extends Component {
    state = {
        newSpecialist: {
            service: this.props.match.params.id,
            name: "",
            photo_url: "",
            description: "",
            email: ""
        },
        redirectToHome: false
    }


    handleChange = (evnt) => {
        let allnewSpecialist = { ...this.state.newSpecialist }

        allnewSpecialist[evnt.target.name] = evnt.target.value
        this.setState({
            newSpecialist: allnewSpecialist
        })
    }

    handleSubmit = (evnt) => {
        evnt.preventDefault()

        axios.post('/api/specialists/', this.state.newSpecialist)
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="outlined-name"
                        label="Name"
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.newSpecialist.name}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Description"
                        name="description"
                        type="description"
                        onChange={this.handleChange}
                        value={this.state.newSpecialist.description}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
        // id="outlined-email-input"
        label="Email"
        type="email"
        name="email"
        onChange={this.handleChange}
        value={this.state.newSpecialist.email} 
        margin="normal"
        variant="outlined"
      />
                    <TextField
        // id="outlined-email-input"
        label="Image URL"
        // className={classes.textField}
        type="img"
        name="photo_url"
        onChange={this.handleChange}
        value={this.state.newSpecialist.photo_url}
        autoComplete="url"
        margin="normal"
        variant="outlined"
      />
                    <input type="submit" value="Submit" />
                </form>

            </div>
            // <div>
            //      <form onSubmit={this.handleSubmit}>
            //          <input type="text" name="name" label="name" onChange={this.handleChange} value={this.state.newSpecialist.name}/>
            //          <input type="img" name="photo_url" label="image_url" onChange={this.handleChange} value={this.state.newSpecialist.photo_url}/>
            //          <input type="text" name="description" onChange={this.handleChange} value={this.state.newSpecialist.description}/>
            //          <input type="email" name="email" label="email" onChange={this.handleChange} value={this.state.newSpecialist.email}/>
            //         <input type="submit" value="Submit"/>
            //      </form>

            // </div>
        )
    }
}
export default SpecialistsForm;