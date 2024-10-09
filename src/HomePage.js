import React from 'react';
import './HomePage.css';

import Image1 from './Images/Image1.jpg';
import Image2 from './Images/Image2.jpg';
import Image3 from './Images/Image3.jpg';
import Image4 from './Images/Image4.jpg';
import Image5 from './Images/Image5.jpg';
import Image6 from './Images/Image6.jpg';
import Image7 from './Images/Image7.jpg';
import Image8 from './Images/Image8.jpg';
import Image9 from './Images/Image9.jpg';


const HomePage = () => {
  return (
    <div>
      <div className="header">
        <div className="inner_header">
          <div className="logo_container">
            <h1>DriveDynamics</h1>
          </div>

          <ul className="navigation">
            <a className="Menubutton" href="/about" target="Content_Frame"><li>About</li></a>
            <a className="Menubutton" href="/Contact" target="Content_Frame"><li>Services</li></a>
            <a className="Topbutton" href="/shop" target="Top_frame"><li>Shop</li></a>
            <a className="Topbutton" href="/Review" target="Top_frame"><li>Review</li></a>
            <a className="Topbutton" href="/PayCenter" target="Top_Frame"><li>Payment</li></a>
          </ul>
        </div>
      </div>
      <div>
        <h2>OUR AUTO PARTS</h2>
        <p>Here, you'll find the best car parts that exist in Canada.
          Explore our various parts and find the one that suits you perfectly.
          We offer the best deals that you cannot decline.
          We ensure that you get the best quality car parts that there is.
        </p>

        <img src={Image1} alt="Image1" />
        <img src={Image2} alt="Image2" />
        <img src={Image3} alt="Image3" />
        <img src={Image4} alt="Image4" />
        <img src={Image5} alt="Image5" />
        <img src={Image6} alt="Image6" />
        <img src={Image7} alt="Image7" />
        <img src={Image8} alt="Image8" />
        <img src={Image9} alt="Image9" />
        <form>
         <input type="search" id="search-box" placeholder="Search..." />
         <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;