import React, { useState } from 'react'
import Nav from '../componants/Nav'
import axios from 'axios';


export const History = () => {

const getAuth= () => {
  return localStorage.getItem("AUTH") ? localStorage.getItem("AUTH") : null 
}
const [auth,setAuth] = useState(getAuth())

const headers = {
  'Authorization' : `Bearer ${auth}`
}

var config = {
  method: 'get',
  url: 'http://localhost:8000/api/v1/history',
  headers: { 
    headers
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


  return (
    <div>
        <Nav/>
    </div>
  )
}
