import React, { useState } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import Div from '../Div';

const Newsletter = ({ title, subtitle, placeholder }) => {
  const [email, setEmail] = useState(''); // State to manage email input
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage form submission status
  const [message, setMessage] = useState(''); // State to manage success/error messages

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      // Send POST request to the backend
      const response = await axios.post(
        'https://weppso-backend.vercel.app/weppso/subscription', // Replace with your backend URL
        { email }
      );

      // Handle success response
      setMessage(response.data.message || 'Subscribed successfully!');
      setEmail(''); // Clear the input field
    } catch (error) {
      // Handle error response
      console.error('Error subscribing:', error);
      setMessage(error.response?.data?.message || 'An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <Div className="cs-newsletter cs-style1">
        <form onSubmit={handleSubmit} className="cs-newsletter_form">
          <input
            type="email"
            className="cs-newsletter_input"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="cs-newsletter_btn" disabled={isSubmitting}>
            <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
          </button>
        </form>
        <Div className="cs-newsletter_text">
          {subtitle}
          {message && <p style={{ color: message.includes('success') ? 'green' : 'red' }}>{message}</p>}
        </Div>
      </Div>
    </>
  );
};

export default Newsletter;