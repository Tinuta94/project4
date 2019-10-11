import React, { Component } from 'react'

import { fa_facebook_square } from "react-icons/fa";

 class Contact extends Component {
    render() {
        return (
            <div>
            <div class="anim">
           
                <h3 class="contact">Please contact us to make an appointment or schedule a free consultation with our specialists.</h3>
                <i  class="fab fa-facebook-square"></i>
                {/* <FontAwesomeIcon icon={faFacebook} /> */}
                 
                <br></br>           
                  <h3>Email: paradis@gmail.com</h3>
               
                  <h3>Phone: (474)-767-5854</h3>
                  {/* <span class="fa-stack fa-2x"> */}
  {/* <i class="fas fa-square fa-stack-2x"></i>
  <i class="fab fa-twitter fa-stack-1x fa-inverse"></i> */}
{/* </span> */}
            </div>
            </div>
            
        )
    }
}
export default Contact;