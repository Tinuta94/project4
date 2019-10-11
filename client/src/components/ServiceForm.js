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
        <div>

<form onSubmit={this.handleSubmit}>
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
                      <TextField
        // id="outlined-email-input"
        label="Image URL"
        // className={classes.textField}
        type="img"
        name="photo_url"
        onChange={this.handleChange}
        value={this.state.service.photo_url}
        autoComplete="url"
        margin="normal"
        variant="outlined"
      />  
       <Button variant="contained" type="submit" >
        Submit</Button>
       </form>
        {/* <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" onChange={this.handleChange} value={this.state.service.name} />
            <input type="img" name="photo_url" label="image_url" onChange={this.handleChange} value={this.state.service.photo_url}/>
            <input type="submit" value="Submit" />
        </form> */}
        </div>
    )
}
 }
export default ServiceForm;