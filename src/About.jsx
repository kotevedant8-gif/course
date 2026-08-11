import React from 'react'
import './Mory.css'
import { FaBookOpen } from "react-icons/fa";
import { RiAccountBoxFill } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoHeadset } from "react-icons/io5";
const AboutUs = () => {
  return (
    <div>
       <div className='yy'>
        <div  className='ux'>
          <span><b><h2>About MyLibrary</h2></b></span>
        </div>
        <div>
          <span><b>MyLibrary is a digital libray platfrom that connects readers with a vast collection<br/>
            of book from various genres and categories.</b>
          </span><br /> <br />
          <span>
           <b> Our mission to promote reading and make <br />
            Knowiedg accessible to everyone,everywhere.</b>
          </span>
        </div>
        <div className='vk'>
          <img src="https://media.istockphoto.com/id/505551939/photo/library.jpg?s=612x612&w=0&k=20&c=lGwjpaVR2__plgaEeRiLZ0n1up16Zm3PW6zlR4paabI=" alt="" />
        </div>
        <div className='ey'>
        <div className='ay'>
           <span><FaBookOpen className='ck' /><b><h3>Our Collection</h3></b></span>
           <span><b>We offer thousands of books <br />across multiple categorices.</b></span>
        </div>
        <div className='ay'>
             <span><RiAccountBoxFill className='cv' /><b><h3>Our Vision</h3></b></span>
             <span>To build a community of <br />lifelong readers. </span>
        </div>
        <div className='ay'>
             <span><MdOutlineVerifiedUser className='cv'/><b><h3>Quality & Trust</h3></b></span>
             <span>We ensure qulity content <br />and a safe reading experince.</span>
        </div> 
        <div className='ay'>
           <span><IoHeadset className='cv'/><b><h3>24/8 Support</h3></b></span>
           <span>We are here to help you <br />anytime,anywhere.</span>
        </div>
        </div>
       </div>
    </div>
  )
}

export default AboutUs