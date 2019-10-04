import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
 import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


export default class Location extends Component {
    render() {
        return (
            <div>
                <Carousel className="slideshowrender">
                    <div>
                        <img src="https://i.pinimg.com/564x/1e/3e/95/1e3e951875ecf30f3f37fea71f083bb7.jpg" />
                        <p className="legend">(404) 566-4247<br></br>
                            4475 Roswell Road,<br></br>
                            Marietta, GA</p>
                    </div>
                    <div>
                        <img src="https://i.pinimg.com/564x/2a/3a/a9/2a3aa9a4851e8cc577e1ac09476b74e7.jpg" />
                        <p className="legend">(404) 237-4664<br></br>
                            39 West Ferry Road<br></br>
                            Atlanta, Georgia</p>
                    </div>
                    <div>
                        <img src="https://i.pinimg.com/564x/06/c5/3b/06c53bda0c78db83fa5353bdee405693.jpg" />
                        <p className="legend">(678) 987-3678 <br></br>
                            3155 Avalon Boulevard<br></br>
                            Alpharetta, Georgia</p>
                    </div>
                </Carousel>
            </div>
        )
    }
}
