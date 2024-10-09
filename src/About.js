import React from 'react'
import './About.css'
import Image1 from './Images/AParts.jpg'
import './HomePage.js'



const About = () => {
    return(
        <div>
            <div class="heading">
            <h2>ABOUT US</h2>
            <p>Our website insure that the best car parts are being sold.From the steering wheels
                to the Muffler.From the Clutch to the Rims.From the Battery to the Engine.
                Whatever you need,you'll definitely find it right here</p>
            </div>
            <div class="container">
                <section class="about">
                    <div class="about-image">
                        <img src={Image1}></img>
                    </div>
                    <div class="about-content">
                        <h2>Discover your Car</h2>
                        <p>Car parts are the essential building blocks that keep vehicles running smoothly and reliably.
                            From sturdy engines that power us forward to precision-engineered brakes that ensure safety,
                            each part plays a crucial role in delivering a seamless driving experience.
                            Their quality craftsmanship and innovative designs not only enhance performance but also contribute to the durability and efficiency of our beloved automobiles,
                            making every journey more enjoyable and dependable.</p>
                            <a href="" class="read-more">Read More</a>
                    </div>
                </section>
            </div>
        </div>        
    );
};

export default About;