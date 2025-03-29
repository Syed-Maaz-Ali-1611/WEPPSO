import React from 'react';
import { Helmet } from 'react-helmet'; // Import React Helmet
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';
import './footer.scss';

// Footer Data
const copyrightLinks = [
  { title: 'Terms of Use', href: '/' },
  { title: 'Privacy Policy', href: '/' },
];

const serviceMenu = [
  { title: 'Application Development', href: '/service/service-details' },
  { title: 'Website Development', href: '/service/service-details' },
  { title: 'Graphics Design', href: '/service/service-details' },
  { title: 'UI/UX Designs', href: '/service/service-details' },
];

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <>
      {/* React Helmet for Global Meta Tags */}
      <Helmet>
        <meta
          name="description"
          content="Weppso is a leading digital solutions provider, offering web development, mobile apps, UI/UX design, and SEO services to transform businesses."
        />
        <meta
          name="keywords"
          content="web development, mobile apps, UI/UX design, SEO services, Weppso"
        />
        <meta name="author" content="Weppso" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/weppsologo.png" />
      </Helmet>

      {/* Footer Section */}
      <footer className="cs-fooer">
        <Div className="cs-fooer_main">
          <Div className="container">
            <Div className="row">
              {/* Column 1: Logo and Social Widget */}
              <Div className="col-lg-3 col-sm-6">
                <Div className="cs-footer_item">
                  <TextWidget
                    logoSrc="/images/weppsologo.png"
                    logoAlt="Weppso Logo"
                    text={
                      <>
                        <span style={{ color: '#FFF', fontWeight: 'bold' }}>
                          Welcome to{' '}
                        </span>
                        <span style={{ color: '#FF4A17', fontWeight: 'bold' }}>
                          WEPPSO
                        </span>
                        <br />
                        Where ideas come to life. Streamline, innovate, and grow
                        with our cutting-edge solutions. Let’s build the future
                        together!
                      </>
                    }
                  />
                  <SocialWidget />
                </Div>
              </Div>

              {/* Column 2: Services Menu */}
              <Div className="col-lg-3 col-sm-6">
                <Div className="cs-footer_item">
                  <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
                </Div>
              </Div>

              {/* Column 3: Contact Info */}
              <Div className="col-lg-3 col-sm-6">
                <Div className="cs-footer_item">
                  <ContactInfoWidget title="Contact Us" />
                </Div>
              </Div>

              {/* Column 4: Newsletter */}
              <Div className="col-lg-3 col-sm-6">
                <Div className="cs-footer_item">
                  <Newsletter
                    title="Subscribe"
                    subtitle="Join our community and stay updated with the latest news and exclusive offers!"
                    placeholder="example@gmail.com"
                  />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>

        {/* Footer Bottom Section */}
        <Div className="container">
          <Div className="cs-bottom_footer">
            <Div className="cs-bottom_footer_left">
              <Div className="cs-copyright">Copyright © 2025 WEPPSO.</Div>
            </Div>
            {/* <Div className="cs-bottom_footer_right">
              <MenuWidget menuItems={copyrightLinks} variant="cs-style2" />
            </Div> */}
          </Div>
        </Div>
      </footer>
    </>
  );
}