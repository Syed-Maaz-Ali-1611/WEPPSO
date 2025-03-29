import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import React Helmet
import { pageTitle } from '../../helper';
import Card from '../Card';
import Button from '../Button';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import IconBox from '../IconBox';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import TestimonialSlider from '../Slider/TestimonialSlider';
import Spacing from '../Spacing';

export default function ServicesPage() {
  pageTitle('Service');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* React Helmet for SEO */}
      <Helmet>
        <title>Services - Weppso | Web, App, UI/UX Design & SEO Solutions</title>
        <meta
          name="description"
          content="Weppso offers a wide range of services including web development, app development, UI/UX design, SEO, and more. Transform your business with our expert solutions."
        />
        <meta
          name="keywords"
          content="web development, app development, UI/UX design, SEO services, graphic design, Weppso"
        />
        <meta name="author" content="Weppso" />
        <meta property="og:title" content="Services - Weppso | Web, App, UI/UX Design & SEO Solutions" />
        <meta
          property="og:description"
          content="Weppso offers a wide range of services including web development, app development, UI/UX design, SEO, and more. Transform your business with our expert solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weppso.com/services" />
        <meta property="og:image" content="/images/service_hero_bg.jpeg" />
        <link rel="canonical" href="https://www.weppso.com/services" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Weppso Services",
              "description": "Weppso offers a wide range of services including web development, app development, UI/UX design, SEO, and more. Transform your business with our expert solutions.",
              "url": "https://www.weppso.com/services",
              "image": "/images/service_hero_bg.jpeg",
              "provider": {
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
        title="Services"
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText="Services"
      />
      {/* End Page Heading Section */}

      {/* Start Services Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="UI/UX Design"
                    src="/images/service_1.jpeg"
                    alt="UI/UX Design Services by Weppso"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Website Development"
                    src="/images/service_2.jpeg"
                    alt="Website Development Services by Weppso"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Application Development"
                    src="/images/service_7.jpeg"
                    alt="Application Development Services by Weppso"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Graphics Design"
                    src="/images/service_4.jpeg"
                    alt="Graphics Design Services by Weppso"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="SEO"
                    src="/images/service_5.jpeg"
                    alt="SEO Services by Weppso"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Content Creation"
                    src="/images/service_6.jpeg"
                    alt="Content Creation Services by Weppso"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Game Development"
                    src="/images/service_3.jpeg"
                    alt="Game Development Services by Weppso"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Consulting Services"
                    src="/images/service_9.jpeg"
                    alt="Consulting Services by Weppso"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Services Section */}

      {/* Start Software Development Workflow Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <SectionHeading
          title="Software Development Workflow"
          subtitle="Development Process"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/service_icon_1.svg"
              title="Strategic Planning and Analysis"
              subtitle="In this phase, we conduct comprehensive project planning and analysis to define clear objectives, scope, and deliverables. By performing thorough requirements gathering and feasibility studies, we ensure that the software development aligns with your business goals, setting a solid foundation for successful project execution."
            />
            <Spacing lg="30" md="30" />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/service_icon_2.svg"
              title="Software Development and Implementation"
              subtitle="Our development phase employs agile methodologies to facilitate iterative development and continuous integration. Our team of experts utilizes the latest technologies to build robust, scalable, and secure software solutions. This approach allows for flexibility, adaptability, and timely delivery of high-quality software products."
            />
            <Spacing lg="30" md="30" />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/service_icon_3.svg"
              title="Quality Assurance and Deployment"
              subtitle="We emphasize rigorous quality assurance through comprehensive testing strategies, including automated and manual testing, to ensure optimal functionality and performance. Our continuous deployment practices enable seamless and efficient deployment of software updates, enhancing user experience and satisfaction."
            />
            <Spacing lg="30" md="30" />
          </Div>
        </Div>
      </Div>
      {/* End Software Development Workflow Section */}

      {/* Start Design Services Section */}
      <Spacing lg="120" md="50" />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img
                src="/images/service_img_1.jpeg"
                alt="Design Services by Weppso"
                className="cs-radius_15 w-100"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Below our most design-related services</h2>
            <Spacing lg="50" md="30" />
            <Div className="row">
              <Div className="col-lg-6">
                <Button btnText="WordPress Website Development" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnText="Shopify Store Design and Development" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnText="eCommerce Design and Development" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnText="Website Development" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnText="Application Development" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnText="SEO Services" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnText="Content Creation" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnText="Game Development" variant="cs-type2" />
                <Spacing lg="20" md="10" />
              </Div>
              <Div className="col-lg-6">
                <Button btnText="Web Page Design" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnText="Mobile App Design" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnText="UI/UX Design" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnText="Graphic Design" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnText="Illustration Services" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnText="Consulting Services" variant="cs-type2" />
                <Spacing lg="20" md="10" />
                <Button btnText="Software Quality Assurance (SQA)" variant="cs-type2" />
                <Spacing lg="20" md="10" />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Design Services Section */}

      {/* Start Testimonial Section */}
      <Spacing lg="125" md="55" />
      <TestimonialSlider />
      {/* End Testimonial Section */}

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