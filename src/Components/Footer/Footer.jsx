import React from 'react'

import './Footer.scss'

import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footerSection'>

        <div className='footerLogo'>
            <h3>CSTECH</h3>
            <p>Home of the Best Talent all <br /> Over Africa</p>
        </div>

        <div className='footerRight'>
            <div className='footerIconDiv'>
                <FaLinkedin className='footerIcon'/>
                <BsTwitterX className='footerIcon'/>
                <FaInstagram className='footerIcon'/>
            </div>

            <div>
                <p className='help'>Help and support</p>
                <p className='mailFlex'><IoMdMail />cstech@gmai.com</p>
            </div>
        </div>

    </div>
  )
}

export default Footer