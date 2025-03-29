import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'; // Import React Helmet
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Portfolio from '../Portfolio';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

// Portfolio Data
const portfolioData = [
  {
    title: 'Smart Parking App',
    subtitle: 'See Details',
    href: '/portfolio/smart-parking',
    src: '/images/portfolio_1.jpeg',
    category: ['mobile_apps', 'web_design', 'ui_ux_design'],
    alt: 'Smart Parking App - Mobile and Web Application by Weppso',
  },
  {
    title: 'Ride Hailing App',
    subtitle: 'See Details',
    href: '/portfolio/ride-hailing',
    src: '/images/portfolio_2.jpeg',
    category: ['mobile_apps', 'web_design', 'ui_ux_design'],
    alt: 'Ride Hailing App - Mobile and Web Application by Weppso',
  },
  {
    title: 'Maths Corner HR',
    subtitle: 'See Details',
    href: '/portfolio/maths-corner',
    src: '/images/portfolio_0.jpg',
    category: ['web_design'],
    alt: 'Maths Corner HR - Web Application by Weppso',
  },
  {
    title: 'School Management',
    subtitle: 'See Details',
    href: '/portfolio/school-management',
    src: '/images/portfolio_3.jpeg',
    category: ['mobile_apps', 'ui_ux_design'],
    alt: 'School Management System - Mobile Application by Weppso',
  },
  // Add graphics design images
  ...Array.from({ length: 24 }, (_, i) => {
    const imageNumber = i + 1; // g1 to g23
    const extension =
      imageNumber === 1 || imageNumber === 4 || imageNumber === 5 || imageNumber === 6 || imageNumber === 9
        ? 'jfif'
        : imageNumber === 2 || imageNumber === 3
        ? 'jpg'
        : 'jpeg';
    return {
      title: `Graphics Design ${imageNumber}`,
      subtitle: '',
      href: '#', // No portfolio detail page
      src: `/images/3D/g${imageNumber}.${extension}`,
      category: ['graphics_design'], // Only graphics_design category
      alt: `Graphics Design ${imageNumber} by Weppso`,
    };
  }),
];
// Category Menu
const categoryMenu = [
  { title: 'Websites', category: 'web_design' },
  { title: 'UI/UX Design', category: 'ui_ux_design' },
  { title: 'Mobile Apps', category: 'mobile_apps' },
  { title: 'Graphics Design', category: 'graphics_design' },
];

export default function PortfolioPage() {
  pageTitle('Portfolio');
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* React Helmet for SEO */}
      <Helmet>
        <title>Portfolio - Weppso | Showcasing Our Best Work</title>
        <meta
          name="description"
          content="Explore Weppso's portfolio of web development, mobile apps, UI/UX design, and more. See how we transform ideas into impactful digital solutions."
        />
        <meta
          name="keywords"
          content="portfolio, web development, mobile apps, UI/UX design, Weppso"
        />
        <meta name="author" content="Weppso" />
        <meta property="og:title" content="Portfolio - Weppso | Showcasing Our Best Work" />
        <meta
          property="og:description"
          content="Explore Weppso's portfolio of web development, mobile apps, UI/UX design, and more. See how we transform ideas into impactful digital solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weppso.com/portfolio" />
        <meta property="og:image" content="/images/portfolio_hero_bg.jpeg" />
        <link rel="canonical" href="https://www.weppso.com/portfolio" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Portfolio - Weppso",
              "description": "Explore Weppso's portfolio of web development, mobile apps, UI/UX design, and more. See how we transform ideas into impactful digital solutions.",
              "url": "https://www.weppso.com/portfolio",
              "image": "/images/portfolio_hero_bg.jpeg",
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
        title="Portfolio"
        bgSrc="/images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      />
      {/* End Page Heading Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
              } ${
                active === 'all'
                  ? ''
                  : !item.category.includes(active) // Check if the active category is in the project's category array
                  ? 'd-none'
                  : ''
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                alt={item.alt} // Add alt attribute for SEO
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        {/* Load More Button */}
        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      {/* End Portfolio Section */}

      {/* Start CTA Section */}
      <Spacing lg="145" md="80" />
      <Cta
        title="info@weppso.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
      {/* End CTA Section */}
    </>
  );
}