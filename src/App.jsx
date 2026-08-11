import React from 'react'
import Home from './Home'
import Books from './Books'
import About from './About'
import'./Samu.css'
import Error from'./Error'
import {Route,Routes,NavLink} from 'react-router-dom'
import { FaBookReader } from "react-icons/fa";
const App = () => {
  return (
     <div>
    <div className='aa'>
       <div className='goo'>
       <span><h3>MyLibrory</h3></span>
       </div>
      <div className='bb' >
     <NavLink to='/home'className='rrr'>Home</NavLink>
     <NavLink to='/books'className='rrr'>Books</NavLink>
     <NavLink to='/about'className='rrr'>About</NavLink>
     </div>
     </div>
     <div>
     <Routes>
      <Route path='*'element={<Error></Error>}></Route>
      <Route path='/Home'element={<Home></Home>}></Route> 
      <Route path='/Books'element={<Books></Books>}></Route> 
      <Route path='/About'element={<About></About>}></Route> 
     </Routes>
     </div>
    </div>
  )
}

export default App