import About from './pages/About';
import '../src/pages/style.css'
import { Home } from './pages/Home';
import {Login} from './pages/Login';
import {Loginhome} from './pages/Loginhome';
import {  Navigate, Route,Routes } from 'react-router-dom';
import { Testpg } from './pages/Testpg';
import {History} from "./pages/History";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function App() {
  
  const RouteWithRole = ({ Element }) => {
    const auth = localStorage.getItem("AUTH")
    if(!auth) return (<Navigate replace to={'/signin'}/>)
    return (
      <>
        <Element/>
      </>
    );
  }


  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<RouteWithRole Element={Home} />}/>
    <Route path='/about'  element={<RouteWithRole Element={About} />} />
    <Route path='/signup' element={<Login/>}   />
    <Route path='/signin' element={<Login/>} />
    <Route path='/test' element={<RouteWithRole Element={Testpg} />}/> 
    <Route path='/history' element={<RouteWithRole Element={History} />}/>
    <Route path='/dashboard' element={<RouteWithRole Element={Loginhome} />}/>
    <Route path='/logout' element={<RouteWithRole Element={Login} />}/>
     </Routes>

     <ToastContainer
     autoClose={2000}s
     />
    </div>
  );
}

export default App;
