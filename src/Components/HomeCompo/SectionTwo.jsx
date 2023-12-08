import React from 'react'
import imga from './images/a (1).png'
import imgb from './images/a (2).png'
import imgc from './images/a (3).png'
import imgd from './images/d.jpg'


import './SectionTwo.scss'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const SectionTwo = () => {
  return (
    <div>
        <div className='sectionTwo'>
            <h2>Development Infrastructures : </h2>
            <div className='sectionTwoFlex'>
                <div className='weDiv' data-aos="fade-up" data-aos-duration="3000">
                    <img src={imga} alt="" />
                    <button>Web 2</button>
                    <p>1. Mobile Apps</p>
                    <p>2. Websites</p>
                    <p>3. Efficient tech processes</p>
                    <p>4. Web Apps</p>
                    <p>5. Cross Platform Automations</p>
                </div>

                <div className='weDiv' data-aos="fade-up" data-aos-duration="3000">
                    <img src={imgb} alt="" />
                    <button>Web 3</button>
                    <p>1. We build dApps</p>
                    <p>2. Develop Smart Contracts</p>
                    <p>3. Integrate Oracles</p>
                    <p>4. Tokenomics </p>
                    <p>5. Token Creation</p>
                </div>

                <div className='weDiv' data-aos="fade-up" data-aos-duration="3000">
                    <img src={imgc} alt="" />
                    <button>Web 5</button>
                    <p>1. Research</p>
                </div>
            </div>
        </div>

        <div className='sectionTwoOne'>
            <h2>Portfolio: </h2>
            <div className='sectionTwoFlex'>
                <div className='weDivOne' data-aos="fade-up" data-aos-duration="3000">
                    <img src={imgd} alt="" />
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
                </div>

                <div className='weDivOne' data-aos="fade-up" data-aos-duration="3000">
                    <img src={imgd} alt="" />
                    <h1>Emilist:</h1>
                    <h2>
                        Emilist is a service hiring platform 
                        with a suite of three applications:
                    </h2>
                    <p>Emilist Web app (Landing page and user dashboard/area)</p>
                    <p>Emilist Admin Dashboard</p>
                    <p>Emilist Cross Platform Mobile App</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo