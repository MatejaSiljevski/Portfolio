import React, { useState, useEffect } from 'react'
import Shake from '../../assets/shake.svg'
import './contact.scss'

function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {   
        e.preventDefault()
        setMessage(true)
    }

    useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [message]);

    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src={Shake} alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Email' />
                    <textarea placeholder='Message'></textarea>
                    <button type='submit'>Send</button>
                    <div className="message">
                        {message && <span>Thanks, i will reply ASAP</span>}
                    </div>
                </form>
            </div> 
        </div>
    )
}

export default Contact
