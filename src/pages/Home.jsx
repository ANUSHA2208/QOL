import React from 'react'
import Body from '../componants/Body'
import { Btn1 } from '../componants/Btn1'
import { Image } from '../componants/Image'

export const Home = (props) => {
  return (
    <div>
    <Image/>
    <Body/>
    <Btn1 signinText="Sign in" delay = "May be later"/>
    </div>
  )
}
