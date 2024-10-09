import{userState,UserEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import HomePage from './HomePage.js'
import SignUp from './SignUp.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';  
import { auth } from './firebase'; 
import SignIn from './SignIn.js';
import Shop from './Shop.js'
import About from './About.js'
import PaymentCenter from './PayCenter.js';
import Contact from './Contact.js'
import Footer from './Footer.js';
import Review from './Review.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/PayCenter" element={<PaymentCenter />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Review" element={<Review />} />
      </Routes>
    </Router>
  );
};

export default App;
