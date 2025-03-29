import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Button from '../Button'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import Spacing from '../Spacing'

export default function SmartParkingProject() {
  const params = useParams()
  pageTitle('Smart Parking');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Smart Parking'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText={params.portfolioDetailsId}
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <img src="/images/portfolio_1.jpeg" alt="Details" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Smart Parking System' 
              subtitle='Mobile and Website Portal' 
            >
              <Spacing lg='40' md='20'/>
              <p>The Smart Parking System project is a comprehensive solution that incorporates a variety of advanced technologies aimed at optimizing parking management. A core element of this system is the mobile app developed using React Native, which ensures a smooth, cross-platform experience for users. The app allows individuals to effortlessly search for parking spaces, make reservations, and process payments, all from the convenience of their smartphones. The app's user interface is designed for ease of use, ensuring that users can find and book parking slots quickly, reducing the time spent searching for available spaces. This functionality not only enhances the convenience of the parking experience but also contributes to a more efficient and seamless process for users.</p>
              <Spacing lg='10' md='10'/>
              <p>The system includes real-time parking slot detection using TensorFlow and OpenCV, which identifies available spaces through live video feeds and updates the app instantly. This ensures users see accurate, real-time availability. Additionally, the system features license plate recognition for automated vehicle verification at entry and exit points, allowing only authorized vehicles to access the parking facility, enhancing security and streamlining management.</p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>Mobile Application Development, Machine Learning</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>Pakistan</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>React Native, TensorFlow, OpenCV , firebase, mongodb</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>July-2024</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>Freelance</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
          <Div className="cs-page_navigation cs-center">
            <Div>
              <Button btnLink='/portfolio/portfolio-details' btnText='Prev Project' variant='cs-type1'/>
            </Div>
            <Div>
              <Button btnLink='/portfolio/portfolio-details' btnText='Next Project'/>
            </Div>
          </Div>
      </Div>
      <Spacing lg='145' md='80'/>
      <Cta 
        title='agency@arino.com' 
        bgSrc='/images/cta_bg_2.jpeg'
        variant='rounded-0'
      />
    </>
  )
}
