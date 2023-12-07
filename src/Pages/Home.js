import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import SectionOne from '../Components/HomeCompo/SectionOne'
import SectionTwo from '../Components/HomeCompo/SectionTwo'
import SectionThree from '../Components/HomeCompo/SectionThree'
import Footer from '../Components/Footer/Footer'
const Home = () => {
  return (
    <div>
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Footer />
    </div>
  )
}

export default Home