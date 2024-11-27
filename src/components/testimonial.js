import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author3Src:
    'https://images.unsplash.com/photo-1510706019500-d23a509eecd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjM0MjE1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: 'Michael Johnson',
  author1Src:
    'https://images.unsplash.com/photo-1579652032207-611ccd5cd6b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjM0MjE1MHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: 'HR Manager, Global Innovations Inc.',
  review2:
    'I was impressed with the quality of work and attention to detail in my resume. Thank you for your help!',
  author3Position: 'Software Engineer, Tech Solutions Ltd.',
  author4Name: 'Sarah Lee',
  author1Name: 'John Doe',
  author2Src:
    'https://images.unsplash.com/photo-1674913070707-faa70b0b5371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjM0MjE1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Src:
    'https://images.unsplash.com/photo-1579783902773-e44697cb7602?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjM0MjE1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Position: 'Marketing Manager, XYZ Corp.',
  author1Position: 'CEO, ABC Inc.',
  author4Alt: 'Image of Sarah Lee',
  review3:
    'Working with John was a game-changer for me. His resume writing skills are top-notch.',
  author3Alt: 'Image of Michael Johnson',
  heading1: 'Testimonials',
  author1Alt: 'Image of John Doe',
  review4:
    "I have seen a significant increase in the number of interview calls after using John's resume services.",
  author2Name: 'Jane Smith',
  review1:
    "John's expertise in resume writing helped me land my dream job. I highly recommend his services.",
  author2Alt: 'Image of Jane Smith',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}

Testimonial.propTypes = {
  author3Src: PropTypes.string,
  author3Name: PropTypes.string,
  author1Src: PropTypes.string,
  author4Position: PropTypes.string,
  review2: PropTypes.string,
  author3Position: PropTypes.string,
  author4Name: PropTypes.string,
  author1Name: PropTypes.string,
  author2Src: PropTypes.string,
  author4Src: PropTypes.string,
  author2Position: PropTypes.string,
  author1Position: PropTypes.string,
  author4Alt: PropTypes.string,
  review3: PropTypes.string,
  author3Alt: PropTypes.string,
  heading1: PropTypes.string,
  author1Alt: PropTypes.string,
  review4: PropTypes.string,
  author2Name: PropTypes.string,
  review1: PropTypes.string,
  author2Alt: PropTypes.string,
  content1: PropTypes.string,
}

export default Testimonial
