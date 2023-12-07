import React from 'react'
import mainImage from './images/head.png'


import './SectionOne.scss'
const SectionOne = () => {
  return (
    <div className='sectioOneMain'>
        <div className='sectionOne'>
            <div className='sectioOneFirst'>
                <h2 className='bigH2'>
                    We build products to <span>WORK</span>, <br /> 
                    and we build them <span>FAST </span> at <br />  your <span>  BUDGET</span>.
                </h2>

                <h2 className='smH2'>
                    We build products to <span>WORK</span>, <br /> 
                    and we build them <span>FAST </span> at   your <span>  BUDGET</span>.
                </h2>


                <button className='bookNow'>Book Session Here! </button>
            </div>

            <div className='mainImage'> 
                <img src={mainImage} alt="" />
            </div>
        </div>

        <div className='sectionOneBg'>
            <div className='leveOne'>
                <h2>Level up your skills with expert knowledge.</h2>
            </div>

            <div className='levelBtn'>
                <button>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default SectionOne