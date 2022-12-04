import About from './pages/About';
import '../src/pages/style.css'
import { Home } from './pages/Home';
import {Login} from './pages/Login';
import {Loginhome} from './pages/Loginhome';
import {  Route,Routes } from 'react-router-dom';
import { Testpg } from './pages/Testpg';
import Nav from "./componants/Nav"
import {History} from "./pages/History"



function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Nav/>}/>
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/signup' element={<Login/>} />
    <Route path='/signin' element={<Login/>} />
    <Route path='/test' element = {<Testpg/>}/> 
    <Route path='/history' element={<History/>}/>
    <Route path='/dashboard' element={<Loginhome/>}/>
    <Route path='/logout' element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;
