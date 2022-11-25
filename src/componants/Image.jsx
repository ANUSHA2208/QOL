import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../pages/style.css'
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'

export const Image = () => {  
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100 imgchange"
        src={one}
      />
      <hr/>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 imgchange"
        src={two}
      />
       <hr/>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100 imgchange"
        src={three}
      />
       <hr/>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100 imgchange"
        src={four}
      />
       <hr/>
    </Carousel.Item>
  </Carousel>

  )
}
