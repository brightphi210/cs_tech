import React from 'react'
import './PortfolioComp.scss'

import { FaArrowRightLong } from "react-icons/fa6";
import {Link} from 'react-router-dom'

import imgs from './d.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const PortfolioComp = () => {
  return (
    <div className='portfolioSection'>
    <div className='portfolioCard' data-aos="fade-left" data-aos-duration="3000">
      <h2>Our Portfolio</h2>
      <p>
        Our code academy teaches students in various programming languages;
      </p>
      <Link to={'/contact'}><button>Book us Now</button></Link>
    </div>

    <div className='portfolioGenDiv'>
      <div className='eachportfolio' data-aos="fade-up" data-aos-duration="3000">
        <img src={imgs} alt="" />
        <h1>Bitsave:</h1>
        <h2>
            We built a multi-chain Savings protocol 
            from scratch, 
            the project involved:
        </h2>
        <p>Research Back end developments</p>
        <p>Maths and economic formula developments</p>
        <p>Pseudo code creation</p>
        <p>Flow chart development</p>
        <p>UI/UX design</p>
        <p>Smart Contract development</p>
        <p>Front End developments</p>
        <Link to={'/contact'}><button>View App <FaArrowRightLong /></button></Link>
      </div>

      <div className='eachportfolio' data-aos="fade-up" data-aos-duration="3000">
        <img src={imgs} alt="" />
        <h1>Emilist:</h1>
        <h2>
            Emilist is a service hiring platform 
            with a suite of three applications:
        </h2>
        <p>Emilist Web app (Landing page and user dashboard/area)</p>
        <p>Emilist Admin Dashboard</p>
        <p>Emilist Cross Platform Mobile App</p>
        <Link to={'/contact'}><button>View App <FaArrowRightLong /></button></Link>
      </div>
    </div>
  </div>
  )
}

export default PortfolioComp