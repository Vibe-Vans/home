import React, { Component } from 'react'
import { Zoom } from 'react-slideshow-image'
import img from '../assets/images/slide-2.jpg'
class SlideShow extends Component {
  render() {
    const images = ['slide-2.jpg', 'slide-3.jpg', 'slide-4.jpg']
    const zoomOutProperties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      scale: 0.4,
      arrows: true,
    }
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {images.map((each, index) => (
            <img
              key={index}
              style={{ width: '100%' }}
              src={require(`../assets/images/${each}`)}
            />
          ))}
        </Zoom>
      </div>
    )
  }
}

export default SlideShow
