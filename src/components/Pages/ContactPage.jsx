import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'; // Import React Helmet
import axios from 'axios'; // Import axios for HTTP requests
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Cta from '../Cta';
import ContactInfoWidget from '../Widget/ContactInfoWidget';

export default function ContactPage() {
  pageTitle('Contact Us');

  // State to manage form inputs
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    organization: '',
    phone: '',
    message: '',
  });

  // State to manage form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.fullname ||
      !formData.email ||
      !formData.organization ||
      !formData.phone ||
      !formData.message
    ) {
      setSubmitStatus({
        success: false,
        message: 'All fields are required.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send POST request to the backend
      const response = await axios.post(
        'https://weppso-backend.vercel.app/weppso/contact-us', 
        formData
      );

      // Handle success response
      setSubmitStatus({
        success: true,
        message: 'Contact form submitted successfully!',
      });

      // Reset form after successful submission
      setFormData({
        fullname: '',
        email: '',
        organization: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      // Handle error response
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* React Helmet for SEO */}
      <Helmet>
        <title>Contact Us - Weppso | Get in Touch for Digital Solutions</title>
        <meta
          name="description"
          content="Contact Weppso for expert web development, mobile apps, UI/UX design, and SEO services. Let’s bring your vision to life together."
        />
        <meta
          name="keywords"
          content="contact Weppso, web development, mobile apps, UI/UX design, SEO services"
        />
        <meta name="author" content="Weppso" />
        <meta property="og:title" content="Contact Us - Weppso | Get in Touch for Digital Solutions" />
        <meta
          property="og:description"
          content="Contact Weppso for expert web development, mobile apps, UI/UX design, and SEO services. Let’s bring your vision to life together."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weppso.com/contact" />
        <meta property="og:image" content="/images/contact_hero_bg.jpeg" />
        <link rel="canonical" href="https://www.weppso.com/contact" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Us - Weppso",
              "description": "Contact Weppso for expert web development, mobile apps, UI/UX design, and SEO services. Let’s bring your vision to life together.",
              "url": "https://www.weppso.com/contact",
              "image": "/images/contact_hero_bg.jpeg",
              "publisher": {
                "@type": "Organization",
                "name": "Weppso",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.weppso.com/images/logo.png"
                }
              }
            }
          `}
        </script>
      </Helmet>

      {/* Start Page Heading Section */}
      <PageHeading
        title="Contact Us"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Contact"
      />
      {/* End Page Heading Section */}

      {/* Start Contact Form Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Got a vision in mind? <br/>Let’s bring it to life together with WEPPSO."
              subtitle="Getting Touch"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form onSubmit={handleSubmit} className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">Full Name*</label>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  className="cs-form_field"
                  style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="cs-form_field"
                  style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Organization*</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="cs-form_field"
                  style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Mobile*</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="cs-form_field"
                  style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Message*</label>
                <textarea
                  cols="30"
                  rows="7"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="cs-form_field"
                  style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}
                  required
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button type="submit" className="cs-btn cs-style1" disabled={isSubmitting}>
                  <span>{isSubmitting ? 'Submitting...' : 'Send Message'}</span>
                  <Icon icon="bi:arrow-right" />
                </button>
                {submitStatus.message && (
                  <p style={{ color: submitStatus.success ? 'green' : 'red', marginTop: '10px' }}>
                    {submitStatus.message}
                  </p>
                )}
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      {/* End Contact Form Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s Develop Something <br />Remarkable Together"
          btnText="Request a Consultation"
          btnLink="https://calendly.com/weppso-info"
          bgSrc="/images/cta_bg.jpeg"
          target="_blank"
          rel="noopener noreferrer"
        />
      </Div>
      {/* End CTA Section */}

      {/* Start Google Map Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15000!2d67.0604!3d24.8608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f8c6b8c1b1f%3A0x1234567890abcdef!2sDHA+Phase+8%2C+Karachi%2C+Sindh%2C+Pakistan!5e0!3m2!1sen!2sbd!4v1610000000000!5m2!1sen!2sbd"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="Karachi, Sindh, Pakistan Map"
        />
      </Div>
      <Spacing lg="50" md="40" />
      {/* End Google Map Section */}
    </>
  );
}