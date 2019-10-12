import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { fa_facebook_square } from "react-icons/fa";

class Contact extends Component {
    render() {
        return (
            <div>
                <div class="anim"></div>

                <h3 class="contact">Please contact us to make an appointment or schedule a free consultation with our specialists.</h3>

                <div class="continfo">
                    <div class="phone">
                        <a href="+12065192635"><i class="fas fa-phone fa-5x"></i></a>
                    </div>
                   
                    <div class="email">
                        <a href="mailto:paradise@gmail.com"><i class="fas fa-envelope fa-5x" ></i></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;