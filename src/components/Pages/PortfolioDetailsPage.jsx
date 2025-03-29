import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import React Helmet
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

// Mock data for different projects
const projects = {
  'smart-parking': {
    title: 'Smart Parking System',
    subtitle: 'Mobile and Website Portal',
    description: [
      'The Smart Parking System project is a comprehensive solution that incorporates a variety of advanced technologies aimed at optimizing parking management. A core element of this system is the mobile app developed using React Native, which ensures a smooth, cross-platform experience for users.',
      'The system includes real-time parking slot detection using TensorFlow and OpenCV, which identifies available spaces through live video feeds and updates the app instantly.',
    ],
    image: '/images/portfolio_1.jpeg',
    category: 'Mobile Application Development, Machine Learning',
    location: 'Pakistan',
    software: 'React Native, TensorFlow, OpenCV, Firebase, MongoDB',
    date: 'July-2024',
    client: 'Freelance',
  },
  'ride-hailing': {
    title: 'Ride Hailing App',
    subtitle: 'On-Demand Ride Service',
    description: [
      'The Ride Hailing App is a cutting-edge solution designed to revolutionize on-demand ride services. Built with React Native for cross-platform compatibility, the app offers a seamless experience for users to book rides, track drivers in real-time, and process payments securely. The front-end, powered by React Native, ensures a smooth and responsive interface, while the back-end, built with Node.js and Firebase, provides robust functionality. Features like user registration, login, and trip booking are seamlessly integrated, along with a chatbot for instant customer support and in-app payment processing for convenience.',
      'To enhance the user experience, the app leverages Google Maps APIs for accurate location services, route optimization, and real-time traffic updates. Firebase is utilized for user authentication, real-time database management, and cloud functions to handle server-side logic efficiently. The app’s intuitive design, clear navigation, and efficient data handling ensure a seamless experience for both riders and drivers. This project showcases the perfect blend of modern technology and user-centric design, making it a reliable solution for the ride-hailing industry.',
    ],
    image: '/images/portfolio_2.jpeg',
    category: 'Mobile Application Development and Website Application',
    location: 'Pakistan',
    software: 'React Native, Firebase, Google Maps API, MERN stack',
    date: 'January-2025',
    client: 'Freelance',
  },
  'maths-corner': {
    title: 'Maths Corner HR',
    subtitle: 'School Management System',
    description: [
      'The Maths Corner HR is a versatile school management system developed as both a Python-based desktop application and a web application using React for the front-end and Python for the back-end. This comprehensive system streamlines administrative workflows, manages student data, tracks attendance, and enhances communication between teachers, administrators, and parents. The desktop application, built with Python, provides offline functionality and robust data management capabilities, while the web application offers a modern, user-friendly interface for real-time access and collaboration. Key features include centralized student data management, which simplifies handling student profiles, academic records, and attendance, significantly reducing administrative overhead.',
      'The system also includes advanced progress monitoring tools, enabling parents and teachers to track students’ academic performance and attendance trends through detailed reports and interactive dashboards. Built-in messaging tools facilitate seamless communication between teachers and parents, improving engagement and fostering a supportive learning environment. The web application, powered by React and Python, ensures scalability, responsiveness, and efficient data handling. By combining the strengths of desktop and web technologies, Maths Corner HR delivers a flexible and reliable solution for schools looking to modernize their operations and improve stakeholder communication.',
    ],
    image: '/images/portfolio_0.jpg',
    category: 'Desktop & Web Application Development',
    location: 'Pakistan',
    software: 'Python, React, Flask/Django, SQLite/PostgreSQL',
    date: 'June-2023',
    client: 'Maths Corner',
  },
  'school-managment': {
    title: 'School Management System',
    subtitle: 'Smart Attendance & Quiz System',
    description: [
      'The School Management System is an innovative solution designed to streamline school operations with a focus on attendance management and quiz systems. Built using Flutter for cross-platform compatibility, the app provides a seamless user experience for teachers, students, and administrators. The attendance system integrates IoT technology, where a Raspberry Pi equipped with a camera captures images and automatically marks attendance using Python-based facial recognition. This eliminates manual processes and ensures accurate, real-time attendance tracking. Additionally, the app includes a robust quiz system that allows teachers to create, manage, and evaluate quizzes, while students can take quizzes and view results instantly.',
      'The system leverages Firebase for real-time data synchronization, user authentication, and cloud storage, ensuring secure and efficient data management. The IoT integration, powered by Python and Raspberry Pi, enhances the attendance system by automating photo capture and facial recognition. This combination of Flutter, Firebase, and IoT creates a modern, scalable, and user-friendly solution for schools. The app not only simplifies administrative tasks but also enhances engagement between teachers and students, making it a comprehensive tool for modern educational institutions.',
    ],
    image: '/images/portfolio_3.jpeg',
    category: 'Mobile Application & IoT Development',
    location: 'Pakistan',
    software: 'Flutter, Firebase, Python (Raspberry Pi), IoT',
    date: 'June-2024',
    client: 'Freelance',
  },
  // Add more projects as needed
};

// Array of project IDs in order
const projectIds = Object.keys(projects); // ['smart-parking', 'ride-hailing', ...]

export default function PortfolioDetailsPage() {
  const { portfolioDetailsId } = useParams();
  const navigate = useNavigate();

  // Find the current project index
  const currentIndex = projectIds.indexOf(portfolioDetailsId);
  const project = projects[portfolioDetailsId];

  // Function to get the next project ID
  const getNextProjectId = () => {
    const nextIndex = (currentIndex + 1) % projectIds.length; // Loop back to the first project if at the end
    return projectIds[nextIndex];
  };

  // Function to get the previous project ID
  const getPreviousProjectId = () => {
    const prevIndex = (currentIndex - 1 + projectIds.length) % projectIds.length; // Loop back to the last project if at the beginning
    return projectIds[prevIndex];
  };

  // Navigate to the next project
  const handleNextProject = () => {
    const nextProjectId = getNextProjectId();
    navigate(`/portfolio/${nextProjectId}`);
  };

  // Navigate to the previous project
  const handlePreviousProject = () => {
    const previousProjectId = getPreviousProjectId();
    navigate(`/portfolio/${previousProjectId}`);
  };

  pageTitle(project.title);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [portfolioDetailsId]);

  return (
    <>
      {/* React Helmet for SEO */}
      <Helmet>
        <title>{project.title} - Weppso | Portfolio</title>
        <meta
          name="description"
          content={project.description.join(' ')}
        />
        <meta
          name="keywords"
          content={`${project.title}, ${project.category}, Weppso, ${project.software}`}
        />
        <meta name="author" content="Weppso" />
        <meta property="og:title" content={`${project.title} - Weppso | Portfolio`} />
        <meta
          property="og:description"
          content={project.description.join(' ')}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.weppso.com/portfolio/${portfolioDetailsId}`} />
        <meta property="og:image" content={project.image} />
        <link rel="canonical" href={`https://www.weppso.com/portfolio/${portfolioDetailsId}`} />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Project",
              "name": "${project.title}",
              "description": "${project.description.join(' ')}",
              "url": "https://www.weppso.com/portfolio/${portfolioDetailsId}",
              "image": "${project.image}",
              "datePublished": "${project.date}",
              "creator": {
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
        title={project.title}
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText={portfolioDetailsId}
      />
      {/* End Page Heading Section */}

      {/* Start Portfolio Details Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <img
          src={project.image}
          alt={`${project.title} - ${project.subtitle}`}
          className="cs-radius_15 w-100"
        />
        <Spacing lg="90" md="40" />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading title={project.title} subtitle={project.subtitle}>
              <Spacing lg="40" md="20" />
              {project.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg="60" md="40" />
            <h2 className="cs-font_30 cs-font_26_sm cs-m0">Project Info -</h2>
            <Spacing lg="50" md="30" />
            <Div className="row">
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">Category:</h3>
                <p className="cs-m0">{project.category}</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">Location:</h3>
                <p className="cs-m0">{project.location}</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">Software:</h3>
                <p className="cs-m0">{project.software}</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">Dated:</h3>
                <p className="cs-m0">{project.date}</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">Client:</h3>
                <p className="cs-m0">{project.client}</p>
                <Spacing lg="30" md="30" />
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="65" md="10" />
      </Div>
      {/* End Portfolio Details Section */}

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