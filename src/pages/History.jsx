import React, { useState } from 'react'
import Nav from '../componants/Nav'
import axios from 'axios';
import "../pages/style.css"
import { format } from 'date-fns'

let sq=0;
let seq=3;


export const History = () => {

  const getHistory = () =>{
   return localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) :[]
  }

  const [history,setHistory]= useState(getHistory())


  return (
    <div>
        <Nav/>

        {
          history&& history.map((data,key) =>(<div className='rbox'>
          <h3>Tested Date : {`${data.createdAt.slice(0,10)}`}</h3>
            <h4 className='num'>Physical - {(((data.physicalScore-7-sq)/28)*100).toFixed(2)} </h4>
            <progress id="file1" value={(((data.physicalScore-sq-7)/28)*100)} max="100">{data.physicalScore} </progress>
            <h4 className='num'>Mental - {(((data.mentalScore-6)/24)*100).toFixed(2)} </h4>
            <progress id="file2" value={(((data.mentalScore-6)/24)*100)} max="100">{data.physicalScore} </progress>
            <h4 className='num'>Social - {(((data.socialScore-seq)/(seq*4))*100).toFixed(2)} </h4>
            <progress id="file3" value={(((data.socialScore-seq)/(seq*4))*100)} max="100">{data.physicalScore} </progress>
            <h4 className='num'>Environmental - {(((data.environmentalScore-8)/32)*100).toFixed(2)} </h4>
            <progress id="file4" value={(((data.environmentalScore-8)/32)*100)} max="100">{data.physicalScore} </progress>
            </div>))
        }
    </div>
  )
}
