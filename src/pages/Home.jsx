import React from 'react'
import Body from '../componants/Body'
import { Btn2 } from '../componants/Btn2'
import { Image } from '../componants/Image'
import Nav from '../componants/Nav'

export const Home = (props) => {
  
  return (
    <div>
    <Nav/>
    <Image/>
    <Body/>
    <Btn2 signinText="Sign in" delay = "May be later"/>
    </div>
  )
}
