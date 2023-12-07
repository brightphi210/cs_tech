import React from 'react'
import './SectionThree.scss'


import { IoLogoPython } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { SiSolidity } from "react-icons/si";

import { IoIosSend } from "react-icons/io";

const SectionThree = () => {
  return (
    <div className='sectionFour'>
        <h2 className='secFourTwo'>Our code academy teaches students in <br /> various programming languages;</h2>
        <div className='courseDiv'>
            <div className='courseEachDiv'>
                <span className='courseIcon'><IoLogoPython className='myIcon'/></span>
                <h2>Python</h2>
                <p>We Offer Comprehensive Python Course</p>
            </div>

            <div className='courseEachDiv'>
                <span className='courseIcon'>< IoLogoJavascript className='myIcon'/></span>
                <h2>Javasript</h2>
                <p>We Offer Comprehensive Js Course</p>
            </div>

            <div className='courseEachDiv'>
                <span className='courseIcon'><SiSolidity className='myIcon'/></span>
                <h2>Solidity</h2>
                <p>We Offer Comprehensive Solidity Course</p>
            </div>
        </div>

        <button>Explore More <IoIosSend /></button>
    </div>
  )
}

export default SectionThree