import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'

export const Image = () => {  
  return (
    <div className="imgchange">
    <img name="slide" width="100%" height="100%" src={one}/>
    <hr />
    </div>

  )
}
