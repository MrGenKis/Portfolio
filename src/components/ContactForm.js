import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construire l'objet de données à envoyer par e-mail
    const data = {
      to_email: "idriss.askri@hotmail.com",
      name,
      email,
      message
    };

    emailjs.send("service_jqdp2ho", "template_dw5gto9", data, 'GW7Osm_zHhUaD8mbs')
      .then((response) => {
        console.log('Email sent successfully!', response.text);
        resetForm();
        setFormMessage('Your message has been sent!');
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        setFormMessage('There was an error, please try again.');
      });
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className='form-content'>
      <br></br>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <br></br>
      <br></br>
   
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <br></br>
        <br></br>
        <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required />
        <br></br>
        <br></br>
        <input type="submit" value="Send" className='hover button' />
      </form>
      <div className="formMessage">{formMessage}</div>
    </div>
  );
};

export default ContactForm;

