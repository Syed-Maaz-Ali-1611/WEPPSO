import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import React Helmet
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import './header.scss';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Div from '../Div';
import DropDown from './DropDown';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

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

      {/* Header Section */}
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" to="/">
                  <img
                    src="/images/weppsologo.png"
                    alt="Weppso Logo"
                    style={{ width: '200px', height: '200px' }}
                  />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li>
                      <NavLink to="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="about"
                        onClick={() => setMobileToggle(false)}
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink
                        to="service"
                        onClick={() => setMobileToggle(false)}
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink
                        to="portfolio"
                        onClick={() => setMobileToggle(false)}
                      >
                        Portfolio
                      </NavLink>
                    </li>
                    <li className="menu-item">
                      <Link
                        to="/contact"
                        onClick={() => setMobileToggle(false)}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      {/* Side Header Section */}
      <Div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" to="/">
            <img
              src="/images/weppsologo.png"
              alt="Weppso Logo"
              style={{ width: '200px', height: '200px' }}
            />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Got a vision in mind? <br /> Let’s bring it to life together with{' '}
              <span style={{ color: '#ff4a17' }}>WEPPSO</span>.
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="Join our community and stay updated with the latest news and exclusive offers!"
              placeholder="example@gmail.com"
            />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}