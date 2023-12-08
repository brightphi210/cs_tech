import React from 'react'
import mainImage from './images/head.png'


import { Link } from 'react-router-dom'

import './SectionOne.scss'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const SectionOne = () => {
  return (
    <div className='sectioOneMain'>
        <div className='sectionOne'>
            <div className='sectioOneFirst' data-aos="fade-left" data-aos-duration="3000">
                <h2 className='bigH2'>
                    We build products to <span>WORK</span>, <br /> 
                    and we build them <span>FAST </span> at  your <span> <br />   BUDGET</span>.
                </h2>

                <h2 className='smH2'>
                    We build products to <span>WORK</span>, <br /> 
                    and we build them <span>FAST </span> at   your <span>  BUDGET</span>.
                </h2>


                <Link to={'/contact'}><button className='bookNow'>Book Session Here! </button></Link>
            </div>

            <div className='mainImage' data-aos="fade-up" data-aos-duration="3000"> 
                <img src={mainImage} alt="" />
            </div>
        </div>

        <div className='sectionOneBg' data-aos="fade-up" data-aos-duration="3000">
            <div className='leveOne'>
                <h2>Level up your skills with expert knowledge.</h2>
            </div>

            <div className='levelBtn'>
                <Link to={'/courses'}><button>Learn More</button></Link>
            </div>
        </div>
    </div>
  )
}

export default SectionOne