import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


export default class Location extends Component {
    render() {
        return (
            <div>
                <h2>Explore our Locations</h2>
                <hr></hr>
                <div class="body">

                    <Carousel className="slideshowrender">

                        <div>
                            <img src="https://i.pinimg.com/564x/1e/3e/95/1e3e951875ecf30f3f37fea71f083bb7.jpg" />
                            <p class="legend">(404) 566-4247<br></br>
                                4475 Roswell Road,<br></br>
                                Marietta, GA</p>
                        </div>
                        <div>
                            <img src="http://img1.wsimg.com/isteam/ip/7cc97807-6f84-4b05-ad27-38666cd1a781/1e884539dedf53b8d2fe1b8d69a85f5d.jpg" />
                            <p class="legend">(404) 237-4664<br></br>
                                39 West Ferry Road<br></br>
                                Atlanta, Georgia</p>
                        </div>
                        <div>
                            <img src="https://i.pinimg.com/564x/06/c5/3b/06c53bda0c78db83fa5353bdee405693.jpg" />
                            <p class="legend">(678) 987-3678 <br></br>
                                3155 Avalon Boulevard<br></br>
                                Alpharetta, Georgia</p>
                        </div>

                    </Carousel>

                    <div className="texts">
                        <p id="text"> Located in Atlanta’s Historic Old Fourth Ward, Un Petit Coin De Paradis is a collective of beauty and wellness professionals 
                        founded on the belief that beauty is not, in fact, skin deep; that the way we look and feel is deeply and directly
                         influenced by the lives we lead.<br></br>

                        Our convictions are reflected in the services we provide. Whether it’s a facial, an eyebrow wax or haircut,
                         our collective strives to create a peaceful environment where the finest sustainable and natural products
                          are used in the most personalized treatments for your needs. We believe in our connection with global
                           and local farms and recognize that they help us plant the seeds for your renewal by growing the bounty
                            used in all of our products.
                            <br></br>
                            Our success rests on our connection with you. At Un Petit Coin De Paradis, you’re not a customer in search of
                         à la carte services. You are a friend who deserves our undivided attention and care.
                           <br></br>
                            <br></br>
                        </p>

                    </div>
                </div>
            </div>
        )
    }
}
