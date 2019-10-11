import React, { Component } from 'react'
import axios from 'axios';
import { Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

class ListofServices extends Component {
    state = {
        services: []
    }

    componentDidMount() {
        this.addService()

    }

    addService = () => {
        axios.get('/api/services/')
            .then((res) => {
                // console.log(res)
                this.setState({ services: res.data });
            })

    };

    render() {
        return (
            <div>
                <div class="service">
                </div>
                <div class="explore">
                <div class="srv">
                    <h4>Explore our services</h4>
                </div>
                <div class="addbutton">
                    <Link class="btnlink" to={`/services/addnew/`} >
                    <i class="fa fa-plus-circle" id="circle" ></i>
                        {/* <Button variant="contained" color="secondary">Add</Button> */}
                    </Link>
                </div>
                </div>
                <div class="list">
                    <ul>
                        {this.state.services.map(service => (
                            
                            // <li>
                                <Link  class="linkserv" to={`/services/${service.id}`} >
                                   <div class="servname"><h5>{service.name}</h5></div> 
                                   <div class="servimg"><img src={service.photo_url}/></div>
                                </Link>
                                
                            // </li>

                        ))}
                        
                        
                    </ul>
                </div>
            </div>
        )
    }
}
    export default ListofServices;