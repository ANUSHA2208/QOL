import About from './pages/About';
import '../src/pages/style.css'
import { Home } from './pages/Home';
import Login from './pages/Login';
import Loginhome from './pages/Loginhome';
import {  Route,Routes } from 'react-router-dom';
import Nav from './componants/Nav';
import Test from './pages/Test/Test';

import 'bootstrap/dist/css/bootstrap.css'
require('jquery')
require('bootstrap')



function App() {
  return (
    <div className="App">
      <Routes>
  
      <Route path='/' element={<Nav/>}>

<Route path='/home' element={<Home/>} />
<Route path='/About' element={<About/>} />
<Route path='/sigup' element={<Login/>} />
<Route path='/signin' element={<Loginhome/>} />
  </Route>
<Route path='/test' element = {<Test/>}/>
</Routes>
    </div>
  );
}

export default App;
