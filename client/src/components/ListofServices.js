import React, { Component } from 'react'
import axios from 'axios';
import { Link} from "react-router-dom"
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
                <div class="srv">
                    <h4>Explore our services</h4>
                </div>
                <div class="addbutton">
                    <Link to={`/services/addnew/`} >
                        <button >Add New Service</button>
                    </Link>
                </div>
                <div class="list">
                    <ul>
                        {this.state.services.map(service => (
                            // <div class="servicels" key={service.id}>
                            <li>
                                <Link to={`/services/${service.id}`} >
                                    {service.name}
                                </Link>
                            </li>

                        ))}
                        
                        
                    </ul>
                </div>
            </div>
        )
    }
}
    export default ListofServices;