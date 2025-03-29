import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';

// Testimonial Data
const testimonialData = [
  {
    testimonialThumb: '/images/thetax_testimonal.png', // Ensure this path is correct
    testimonialText:
      'WEPPSO transformed our business with their incredible app development skills. We needed a user-friendly tax calculation app, and they delivered beyond our expectations. The app is intuitive, fast, and has significantly improved our client engagement. WEPPSO’s team was professional, responsive, and truly understood our needs. We highly recommend them for anyone looking to build a top-notch app!',
    avatarName: 'Mirza Jawwad Baig',
    avatarDesignation: 'TheTax Tech',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/sahl_testimonial.png', // Ensure this path is correct
    testimonialText:
      'Weppso delivered an excellent service, fast and responsive website on the time and within budget. Professionally team and great post launch support. Highly recommended',
    avatarName: 'Ayesha Mansha',
    avatarDesignation: 'SAHL',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/mc_testimonial.png', // Ensure this path is correct
    testimonialText:
      'We approached WEPPSO to create an interactive educational website for Math Corner, and they absolutely nailed it! The website is visually appealing, easy to navigate, and packed with features that make learning math fun for students. Their attention to detail and commitment to quality is unmatched. WEPPSO is our go-to partner for all things digital!',
    avatarName: 'Sir Faheem',
    avatarDesignation: 'Maths Corner',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/sj_testimonial.png', // Ensure this path is correct
    testimonialText:
      'Weppso delivers innovative solutions with a focus on quality and efficiency. Their team is skilled, responsive, and adept at meeting client needs, consistently providing reliable results',
    avatarName: 'Uzair Hamid',
    avatarDesignation: 'SJCURVE',
    ratings: '4.5',
  },
];

export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  // Custom Arrow Components
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );

  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            {/* Thumbnail Slider */}
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img
                          src={item.testimonialThumb}
                          alt={`Thumb ${index + 1}`}
                        />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>

            {/* Testimonial Content Slider */}
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}