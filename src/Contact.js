import React, { useState } from 'react';
import './Contact.css';
 const Contact = () => {

  const [formData, setFormData] = useState({

    name: '',

    email: '',

    message: ''

  });
 
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };
 
  const handleSubmit = (e) => {

    e.preventDefault();


    console.log('Form Data Submitted:', formData);

    setFormData({

      name: '',

      email: '',

      message: ''

    });

  };
 
  return (
<div className="contact-container">
<h2>Contact Us</h2>
<form onSubmit={handleSubmit} className="contact-form">
<div className="form-group">
<label htmlFor="name">Name:</label>
<input

            type="text"

            name="name"

            id="name"

            value={formData.name}

            onChange={handleChange}

            required

          />
</div>
<div className="form-group">
<label htmlFor="email">Email:</label>
<input

            type="email"

            name="email"

            id="email"

            value={formData.email}

            onChange={handleChange}

            required

          />
</div>
<div className="form-group">
<label htmlFor="message">Message:</label>
<textarea

            name="message"

            id="message"

            value={formData.message}

            onChange={handleChange}

            required
></textarea>
</div>
<button type="submit" className="submit-btn">Submit</button>
</form>
</div>

  );

};
 
export default Contact;

 

 