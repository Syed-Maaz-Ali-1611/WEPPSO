import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import React Helmet
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import FunFact from '../FunFact';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import TeamSlider from '../Slider/TeamSlider';
import Spacing from '../Spacing';

// FunFact Data
const funfaceData = [
  { title: 'Global Happy Clients', factNumber: '100+' },
  { title: 'Project Completed', factNumber: '50+' },
  { title: 'Team Members', factNumber: '24' },
  { title: 'Year Experince', factNumber: '5+' },
];

export default function AboutPage() {
  pageTitle('About');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* React Helmet for SEO */}
      <Helmet>
        <title>About Us - Weppso | Your Trusted Digital Solutions Partner</title>
        <meta
          name="description"
          content="Weppso is a leading digital solutions provider, offering cutting-edge web and app development, UI/UX design, and SEO services to transform businesses and drive growth."
        />
        <meta
          name="keywords"
          content="about Weppso, digital solutions, web development, app development, UI/UX design, SEO services"
        />
        <meta name="author" content="Weppso" />
        <meta property="og:title" content="About Us - Weppso | Your Trusted Digital Solutions Partner" />
        <meta
          property="og:description"
          content="Weppso is a leading digital solutions provider, offering cutting-edge web and app development, UI/UX design, and SEO services to transform businesses and drive growth."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weppso.com/about" />
        <meta property="og:image" content="/images/about_hero_bg.jpeg" />
        <link rel="canonical" href="https://www.weppso.com/about" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About Weppso",
              "description": "Weppso is a leading digital solutions provider, offering cutting-edge web and app development, UI/UX design, and SEO services to transform businesses and drive growth.",
              "url": "https://www.weppso.com/about",
              "image": "/images/about_hero_bg.jpeg",
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
        title="About Us"
        bgSrc="/images/about_hero_bg.jpeg"
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Your Trusted Partner in Digital Excellence"
              subtitle="About WEPPSO"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At Weppso, a leading digital solutions provider, we seamlessly integrate cutting-edge
                technology with innovative creativity to deliver unparalleled digital experiences. Our
                dedicated team leverages extensive industry expertise to transform your vision into
                impactful solutions that resonate with your target audience.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/about_img_1.jpeg"
              alt="Weppso - Digital Solutions Provider"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <img
              src="/images/about_img_2.jpeg"
              alt="Weppso - Innovative Technology"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <img
              src="/images/about_img_3.jpeg"
              alt="Weppso - Creative Solutions"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title="Our fun fact"
          subtitle={
            <>
              At <span style={{ color: '#FF5A17', fontWeight: 'bold' }}>Weppso</span>, we transform
              businesses through expert web and app development, UI/UX design, and SEO services,
              driving growth and enhancing online visibility.
            </>
          }
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/about_img_4.jpeg"
                  alt="Weppso - Experienced Team"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Highly Experienced Team Driving Results"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Our highly experienced team sets us apart, offering proven strategies and industry
                expertise to help your business thrive. We specialize in identifying opportunities,
                optimizing processes, and implementing tailored solutions that drive growth and success.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                What makes us unique is our ability to adapt our expertise across industries and
                challenges. Whether streamlining operations, enhancing customer engagement, or scaling
                your business, we deliver measurable results with precision and professionalism.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      {/* <Spacing lg="145" md="80" /> */}
      {/* <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div> */}
      {/* End Team Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s Create Something <br />Amazing Together"
          btnText="Request a Consultation"
          btnLink="https://calendly.com/weppso-info"
          bgSrc="/images/cta_bg.jpeg"
          target="_blank"
          rel="noopener noreferrer"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}