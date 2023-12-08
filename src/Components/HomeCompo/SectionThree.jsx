import React from 'react'
import './SectionThree.scss'

import { Link } from 'react-router-dom';

import { IoLogoPython } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { SiSolidity } from "react-icons/si";

import { IoIosSend } from "react-icons/io";


import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const SectionThree = () => {
  return (
    <div className='sectionFour'>
        <h2 className='secFourTwo'>Our code academy teaches students in <br /> various programming languages;</h2>
        <div className='courseDiv'>
            <div className='courseEachDiv' data-aos="fade-up" data-aos-duration="3000">
                <span className='courseIcon'><IoLogoPython className='myIcon'/></span>
                <h2>Python</h2>
                <p>We Offer Comprehensive Python Course</p>
            </div>

            <div className='courseEachDiv' data-aos="fade-up" data-aos-duration="3000">
                <span className='courseIcon icons2'>< IoLogoJavascript className='myIcon'/></span>
                <h2>Javasript</h2>
                <p>We Offer Comprehensive Js Course</p>
            </div>

            <div className='courseEachDiv' data-aos="fade-up" data-aos-duration="3000">
                <span className='courseIcon'><SiSolidity className='myIcon'/></span>
                <h2>Solidity</h2>
                <p>We Offer Comprehensive Solidity Course</p>
            </div>
        </div>

        <Link to={'/courses'}><button>Explore More <IoIosSend /></button></Link>
    </div>
  )
}

export default SectionThree