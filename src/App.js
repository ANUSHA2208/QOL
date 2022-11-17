import About from './pages/About';
import '../src/pages/style.css'
import { Home } from './pages/Home';
import {Login} from './pages/Login';
import {Loginhome} from './pages/Loginhome';
import {  Route,Routes } from 'react-router-dom';
import Nav from './componants/Nav';
import Test from './componants/Test';



function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Nav/>}>
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/signup' element={<Login/>} />
    <Route path='/signin' element={<Loginhome/>} />
    <Route path='/test' element = {<Test/>}/> </Route>
     </Routes>
    </div>
  );
}

export default App;
