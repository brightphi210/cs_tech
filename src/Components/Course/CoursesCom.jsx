import React from 'react'

import {Link} from 'react-router-dom'

import './CourseCom.scss'
import bg1 from './v (1).png'
import bg2 from './v (2).png'
import bg3 from './v (3).png'
import bg4 from './v (4).png'
import bg5 from './v (5).png'
import bg6 from './v (6).png'
import bg7 from './img1.png'


import { FaArrowRightLong } from "react-icons/fa6";

const CoursesCom = () => {
  return (
    <div className='courseSection'>
      <div className='courseCard'>
        <h2> Courses Availables</h2>
        <p>
          Our code academy teaches students in various programming languages;
        </p>
        <Link to={'/contact'}><button>Book Course Now</button></Link>
      </div>

      <div className='courseGenDiv'>
        <div className='eachCourse'>
          <img src={bg1} alt="" />
          <h2>Python</h2>
          <p>Conprehensive Python Course</p>
          <Link to={'/contact'}><button>Get Course <FaArrowRightLong /></button></Link>
        </div>

        <div className='eachCourse'>
          <img src={bg7} alt="" />
          <h2>Javascript</h2>
          <p>Conprehensive Python Course</p>
          <Link to={'/contact'}><button>Get Course <FaArrowRightLong /></button></Link>
        </div>


        <div className='eachCourse'>
          <img src={bg6} alt="" />
          <h2>Smart Contract Development</h2>
          <p>Conprehensive Python Course</p>
          <Link to={'/contact'}><button>Get Course <FaArrowRightLong /></button></Link>
        </div>

        <div className='eachCourse'>
          <img src={bg1} alt="" />
          <h2>Reach Framework and PYteal for Smartcontract developments.</h2>
          <p>Conprehensive Python Course</p>
          <Link to={'/contact'}><button>Get Course <FaArrowRightLong /></button></Link>
        </div>

        <div className='eachCourse'>
          <img src={bg3} alt="" />
          <h2>Cross Platform development</h2>
          <p>Conprehensive Python Course</p>
          <Link to={'/contact'}><button>Get Course <FaArrowRightLong /></button></Link>
        </div>


        <div className='eachCourse'>
          <img src={bg1} alt="" />
          <h2>Web Design and Development</h2>
          <p>Conprehensive Python Course</p>
          <Link to={'/contact'}><button>Get Course <FaArrowRightLong /></button></Link>
        </div>


        <div className='eachCourse'>
          <img src={bg5} alt="" />
          <h2>Product Design</h2>
          <p>Conprehensive Python Course</p>
          <Link to={'/contact'}><button>Get Course <FaArrowRightLong /></button></Link>
        </div>

        <div className='eachCourse'>
          <img src={bg4} alt="" />
          <h2>Data Analysis</h2>
          <p>Conprehensive Python Course</p>
          <Link to={'/contact'}><button>Get Course <FaArrowRightLong /></button></Link>
        </div>


        <div className='eachCourse'>
          <img src={bg2} alt="" />
          <h2>Cyber Security (Real World Practice)</h2>
          <p>Conprehensive Python Course</p>
          <Link to={'/contact'}><button>Get Course <FaArrowRightLong /></button></Link>
        </div>
      </div>
    </div>
  )
}

export default CoursesCom