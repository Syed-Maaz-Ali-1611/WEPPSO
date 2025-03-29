import React from 'react';
import { Helmet } from 'react-helmet'; // Import React Helmet
import { pageTitle } from '../../helper';
import Div from '../Div';
import SectionHeading from '../SectionHeading';

export default function ErrorPage() {
  pageTitle('Error');

  return (
    <>
      {/* React Helmet for SEO */}
      <Helmet>
        <title>404 Error - Page Not Found | Weppso</title>
        <meta
          name="description"
          content="The page you are looking for does not exist. Please check the URL or go back to the homepage."
        />
        <meta
          name="keywords"
          content="404 error, page not found, Weppso"
        />
        <meta name="author" content="Weppso" />
        <meta property="og:title" content="404 Error - Page Not Found | Weppso" />
        <meta
          property="og:description"
          content="The page you are looking for does not exist. Please check the URL or go back to the homepage."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weppso.com/404" />
        <meta property="og:image" content="/images/about_hero_bg.jpeg" />
        <link rel="canonical" href="https://www.weppso.com/404" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ErrorPage",
              "name": "404 Error - Page Not Found",
              "description": "The page you are looking for does not exist. Please check the URL or go back to the homepage.",
              "url": "https://www.weppso.com/404",
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

      {/* Error Page Content */}
      <Div
        className="cs-page_heading cs-style1 cs-center text-center cs-bg cs-error_page"
        style={{ backgroundImage: 'url("/images/about_hero_bg.jpeg")' }}
      >
        <Div className="container">
          <SectionHeading
            title="This page could <br/>not be found."
            subtitle="404 Error"
            btnText="Back To Home"
            btnLink="/"
            variant="cs-style1 text-center"
          />
        </Div>
      </Div>
    </>
  );
}