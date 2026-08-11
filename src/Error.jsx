import React from 'react'
import './Error.css'
import { FaHome } from "react-icons/fa";
const Error = () => {
  return (
    <div className='jjj'>
        <div className='ppp'>
           
           <div className='uuu'>
            <div className='www'>
              <span style={{color:'darkblue'}}><b>404</b></span>
            </div>
            <span>OOps! page Not Found</span><br />
            <span>The page you 're looking from dosent't exist or has been moved.</span><br />
            <button style={{backgroundColor:'darkblue',color:'white',border:'2px solid black'}}>Go to Home</button>
           </div>
           <div className='vvv'>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlXSR8Fu1MTLh_2Khc66xe4aGjg2n7IoiSvTnfsDx-lg&s=10 " alt="" />
           </div>
        </div>

    </div>
  )
}

export default Error