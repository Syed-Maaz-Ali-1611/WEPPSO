import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import Card from "../Card";
import FunFact from "../FunFact";
import Hero from "../Hero";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import Cta from "../Cta";
import LogoList from "../LogoList";
import MovingText from "../MovingText";
import PortfolioSlider from "../Slider/PortfolioSlider";
import PostSlider from "../Slider/PostSlider";
import TestimonialSlider from "../Slider/TestimonialSlider";
import TeamSlider from "../Slider/TeamSlider";
import VideoModal from "../VideoModal";
import TimelineSlider from "../Slider/TimelineSlider";
import { pageTitle } from "../../helper";

// Hero Social Links
const heroSocialLinks = [
  { name: "Instagram", links: "https://www.instagram.com/weppso_?igsh=cmV3amxkZ2g4Njl0" },
  { name: "Facebook", links: "https://www.facebook.com/share/1Wab5hviiF/?mibextid=wwXIfr" },
  { name: "Whatsapp", links: "https://wa.me/message/JWMHCLS7B6P4F1" },
];

// FunFact Data
const funfaceData = [
  { title: "Global Happy Clients", factNumber: "100+" },
  { title: "Project Completed", factNumber: "50+" },
  { title: "Team Members", factNumber: "24" },
  { title: "Year Experince", factNumber: "5+" },
];

const portfolioData = [
  {
    title: "Smart Parking App",
    subtitle: "See Details",
    href: "/portfolio/smart-parking",
    src: "/images/portfolio_1.jpeg",
    alt: "Smart Parking App - Mobile Application by Weppso",
  },
  {
    title: "Ride Hailing App",
    subtitle: "See Details",
    href: "/portfolio/ride-hailing",
    src: "/images/portfolio_2.jpeg",
    alt: "Ride Hailing App - Mobile Application by Weppso",
  },
  {
    title: "Maths Corner HR",
    subtitle: "See Details",
    href: "/portfolio/maths-corner",
    src: "/images/portfolio_0.jpg",
    alt: "Maths Corner HR - Web Application by Weppso",
  },
  {
    title: "School Managment",
    subtitle: "See Details",
    href: "/portfolio/school-managment",
    src: "/images/portfolio_3.jpeg",
    alt: "School Management System - Mobile Application by Weppso",
  },
];

export default function Home() {
  pageTitle("Home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* React Helmet for SEO */}
      <Helmet>
        <title>Weppso - Your Vision, Our Code | Web & App Development</title>
        <meta
          name="description"
          content="Weppso delivers optimal web and app development solutions, UI/UX design, and SEO services to transform businesses and enhance online visibility."
        />
        <meta
          name="keywords"
          content="web development, app development, UI/UX design, SEO services, Weppso"
        />
        <meta name="author" content="Weppso" />
        <meta property="og:title" content="Weppso - Your Vision, Our Code" />
        <meta
          property="og:description"
          content="Weppso delivers optimal web and app development solutions, UI/UX design, and SEO services to transform businesses and enhance online visibility."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weppso.com" />
        <meta property="og:image" content="/images/hero_bg.jpeg" />
        <link rel="canonical" href="https://www.weppso.com" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Weppso",
              "url": "https://www.weppso.com",
              "logo": "https://www.weppso.com/images/logo.png",
              "description": "Weppso delivers optimal web and app development solutions, UI/UX design, and SEO services to transform businesses and enhance online visibility.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1234567890",
                "contactType": "customer service"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Start Hero Section */}
      <Hero
        title="Your Vision, <br/> Our Code"
        subtitle="Delivering optimal solutions and superior products, now and in the future."
        btnText="Get a Quote"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero_bg.jpeg"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Our Impact"
          subtitle={
            <>
              At <span style={{ color: "#FF5A17", fontWeight: "bold" }}>WEPPSO</span>, we transform
              businesses through expert web and app development, UI/UX design,
              and SEO services, driving growth and enhancing online visibility.
            </>
          }
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
                btnText="See All Services"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="UI/UX design"
                    link="/service"
                    src="/images/service_1.jpeg"
                    alt="UI/UX Design Services by Weppso"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Website Development"
                    link="/service"
                    src="/images/service_2.jpeg"
                    alt="Website Development Services by Weppso"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Mobile Application Development"
                    link="/service"
                    src="/images/service_7.jpeg"
                    alt="Mobile Application Development Services by Weppso"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Graphics Design"
                    link="/service"
                    src="/images/service_4.jpeg"
                    alt="Graphics Design Services by Weppso"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider data={portfolioData} />
      </Div>
      {/* End Portfolio Section */}

      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          At <span style={{ color: "#FF5A17", fontWeight: "bold" }}>Weppso</span>, we embrace change to drive innovation,
          delivering digital solutions that fuel growth and boost online visibility.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=O0jAWp29uDU"
          bgUrl="/images/video_bg_a.jpg"
          alt="Weppso - Innovating Digital Solutions"
        />
      </Div>
      {/* End Video Block Section */}

      {/* Start Team Section */}
      {/* <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div> */}
      <Spacing lg="150" md="80" />
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start MovingText Section */}
      <MovingText text="Innovating Digital Solutions | Empowering Businesses Worldwide | Trusted Technology Partner" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start CTA Section */}
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