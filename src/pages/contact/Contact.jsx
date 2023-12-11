import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    if (formData.get('name') && formData.get('email') && formData.get('message')) {
 
      toast.success('Message sent successfully!', { position: 'top-center' });
      form.reset();
    } else {
      
      toast.error('Please fill in all fields!', { position: 'top-center' });
    }
  };

  return (
    <div className='main'>
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Feel free to reach out!</p>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit" className='contactbuton'>Send Message</button>
      </form>

      <ToastContainer />
    </div>
    </div>
  );
};

export default Contact;
