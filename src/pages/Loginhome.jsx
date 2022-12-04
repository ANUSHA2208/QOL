import React, { useEffect } from 'react'
import Body from '../componants/Body'
import { Btn1 } from '../componants/Btn1'
import { Image } from '../componants/Image'
import Nav from '../componants/Nav'
import { useNavigate } from "react-router-dom";



export const Loginhome = () => {


  return (
    <div>
    <Nav/>
    <Image/>
    <Body/>
    <Btn1 signinText="View History"  delay="Take a Test"/>
</div>
  )
}

export default Loginhome
