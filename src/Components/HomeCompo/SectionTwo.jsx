import React from 'react'
import imga from './images/a (1).png'
import imgb from './images/a (2).png'
import imgc from './images/a (3).png'


import './SectionTwo.scss'


const SectionTwo = () => {
  return (
    <div>
        <div className='sectionTwo'>
            <h2>Development Infrastructures : </h2>
            <div className='sectionTwoFlex'>
                <div className='weDiv'>
                    <img src={imga} alt="" />
                    <button>Web 1</button>
                </div>

                <div className='weDiv'>
                    <img src={imgb} alt="" />
                    <button>Web 2</button>
                </div>

                <div className='weDiv'>
                    <img src={imgc} alt="" />
                    <button>Web 3</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo