import About from './pages/About';
import '../src/pages/style.css'
import { Home } from './pages/Home';
import {Login} from './pages/Login';
import {Loginhome} from './pages/Loginhome';
import {  Route,Routes } from 'react-router-dom';
import { Testpg } from './pages/Testpg';
import Nav from "./componants/Nav"



function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Nav/>}/>
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/signup' element={<Login/>} />
    <Route path='/signin' element={<Loginhome/>} />
    <Route path='/test' element = {<Testpg/>}/> 
     </Routes>
    </div>
  );
}

export default App;
