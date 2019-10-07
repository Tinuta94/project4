import React, { Component } from 'react'

class ListofServices extends Component {
    state = {
        services: []
    }

    componentDidMount() {
        this.addService()

    }

    addService = async () => {
        const res = await axios.get('/api/services/');
        this.setState({ services: res.data });

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
                        <Button >Add New Service</Button>
                    </Link>
                    </div>
                    <div class="list">
                        <ul>
                            {this.state.services.map(service => (
                                // <div class="servicels" key={service.id}>
                                     <li>
                                    <Link to={`/services/${service.id}`} >
                                      <label>
                                            name={service.name}/>
                                        {/* <div > {service.name}</div> */}
                                    </Link>
                                    </li>
                              
                            ))
                              </ul>
                    
                    </div>
                </div>
                )
            }
export default ListofServices;