import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


export default class Location extends Component {
    render() {
        return (


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
                <div class="texts">
                    <p id="text"> I am sure over the last few months many of you will have visited one of the many trade shows that happened across
                 the UK and Ireland.During your visit you will have seen new  pieces of equipment, treatments, techniques and ideas<br></br>
                        of things to add to your business  but what is the best way to introduce a new treatment or technique to your<br></br>
                        business for maximum result but minimum outlay?As an ever evolving industry with a society of people who are more <br></br>
                        <br></br>
                        and more aware of beauty treatments and products, and conscious of their appearance it has become a necessity for <br></br>
                        salons and therapists to introduce new treatments, oducts and techniques on a regular basis to keep ahead of the
                        game and stand out from their  competitors.Introducing new treatments can be expensive in equipment, products and
                training but then you have the added expense of marketing the treatment, all of which add up.<br></br>
                        <br></br>
                        {/* SPECIAL OFFER<br></br>
                        Offer an introductory offer for perhaps the first month to encourage clients to try the new  treatment.
                      Offer an introductory offer for perhaps the first month to encourage clients to try the new  treatment.
                       Depending on the nature of the new treatment you could perhaps pair it with another  treatment for free – for example if you
                      are introducing a new facial you could offer a free back massage with it as this is very inexpensive for you to do. */}
                      </p>

                </div>
            </div>
        )
    }
}
