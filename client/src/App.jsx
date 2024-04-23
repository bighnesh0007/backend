import './app.scss'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import axios from 'axios';
import { UserContextProvider } from './context/UserContext'
import {Toaster} from 'react-hot-toast';
import Dashbord from './pages/Dashbord'

axios.defaults.baseURL='http://localhost:8000'
axios.defaults.withCredentials=true
function App() {


  return (
    <>
    <UserContextProvider>
   
      <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashbord/>}></Route>
      </Routes>
    </UserContextProvider>
    </>
  )
}

export default App
