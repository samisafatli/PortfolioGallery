import { useState } from 'react';
import './ContactPage.css'
import { Instagram } from '@mui/icons-material';

export const ContactPage = () => {
  const instagramPage = 'https://www.instagram.com/samisafatli?igsh=MW9sYzV5YmtxbzFiaw=='
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='contact_page_container'>
      <div className="imageSection">
        <img src="../public/photos/background_IMG_2253.JPG" alt="BackgroundImage" className="actorImage" />
      </div>
      <div className="contact-form">
        <h1>Contact Me</h1>
        <a href={instagramPage} target="_blank" rel="noopener noreferrer"><Instagram style={{ color: "white", fontSize: "60px" }} /></a>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
