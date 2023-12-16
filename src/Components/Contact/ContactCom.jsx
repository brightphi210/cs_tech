import React, { useState } from 'react'
import './ContactCom.scss'

import { useForm, ValidationError } from '@formspree/react';


import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();




const ContactCom = () => {

  const [state, handleSubmit] = useForm('mleqrdyr');

  const [show, setShow] = useState(true)

  const [isLoading, setIsLoading] = useState(true)


  const setFalse = () => {
    setShow(false)
  }
  
  
  // if(state === false) {
  //   setIsLoading(true)
  // }

  // else{
  //   setIsLoading(false)
  // }

  
  return (
    <div className='contactSession'>
      <div className='contactCard' data-aos="fade-up" data-aos-duration="3000">
        <h2> Book a session now</h2>
        <p>
          Talk to us, about what you want, 
          and we’ll respond as soon as you submit:
        </p>
      </div>


      <div className='formDiv' data-aos="fade-up" data-aos-duration="3000">
        <form action="" onSubmit={handleSubmit}>

            <div className='inputDiv'>
                <label htmlFor="">Name</label>
                <input type="text" id='name' name='name' placeholder='Provide Name: '/>
            </div>

            <div className='inputDiv'>
                <label htmlFor="">Number</label>
                <input type="phone number" id='phone' name='phone' placeholder='Provide Number: '/>


            </div>


            <div className='inputDiv'>
                <label htmlFor="">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                
                placeholder='Provide Email: '/>

                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
            </div>

            <div className='inputDiv' > 
              <label >Purpose</label>
              <select className="myDropdown" >
                <option value="option2" id='_optin'>Code Academy</option>
                <option value="option3" id='_optin'>Product Development</option>
              </select>
            </div>


            <div className='inputDiv'>
              <label className='textLabel'>
                Talk to us, about what you want, and we’ll respond as soon as you submit:
              </label>
              <textarea
                id="message"
                name="message"
               placeholder='tell use what you want'>

              </textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>

            <button type="submit" disabled={state.submitting}>{isLoading ? 'Submit' : 'Loading . . .'}</button>
          
        </form>
        
      </div>


      {state.succeeded && (
        <div>
          {show && (<div>
            <div className='modal'>
            <div className='modal-content'>
              <h2>Message Sucessfull</h2>
              <p>Message has been sent successfully, you will recieve a reply shortly</p>
              <button onClick={setFalse}>Close</button>
            </div>
          </div>
          </div>)}
        </div>
      )}
      
    </div>
  )
}

export default ContactCom