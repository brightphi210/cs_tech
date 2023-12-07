import React from 'react'
import './ContactCom.scss'

const ContactCom = () => {
  return (
    <div className='contactSession'>
      <div className='contactCard'>
        <h2> Book a session now</h2>
        <p>
          Talk to us, about what you want, 
          and we’ll respond as soon as you submit:
        </p>
      </div>

      <div className='formDiv'>
        <form action="">

            <div className='inputDiv'>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Provide Name: '/>
            </div>

            <div className='inputDiv'>
                <label htmlFor="">Number</label>
                <input type="text" placeholder='Provide Number: '/>
            </div>


            <div className='inputDiv'>
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Provide Email: '/>
            </div>

            <div className='inputDiv' > 
              <label >Purpose</label>
              <select className="myDropdown">
                <option value="option2">Code Academy</option>
                <option value="option3">Product Development</option>
              </select>
            </div>


            <div className='inputDiv'>
              <label className='textLabel'>
                Talk to us, about what you want, and we’ll respond as soon as you submit:
              </label>
              <textarea placeholder='tell use what you want'>

              </textarea>
            </div>

            <button>Submit</button>
          
        </form>
      </div>
    </div>
  )
}

export default ContactCom