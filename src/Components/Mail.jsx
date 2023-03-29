import React, { useState, } from 'react'
import '../styles/Mail.css'
import Swal from 'sweetalert2'
import emailjs from "emailjs-com";

const Mail = () => {
  // const radio = useRef();
  const [toSend, setToSend] = useState({
    subject: '',
    name: '',
    email: '',
    message: ''
  });
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);



  const validation = (email, name, message) => {
    if (!name.trim()) {
      setNameError(true)
      return
    } else {
      setNameError(false)
    }
    const acceptedEmail = ['gmail.com', 'yahoo.com', 'outlook.com', 'protonmail.com', 'aol.com', 'icloud.com', 'me.com', 'mac.com', 'gmx.com', 'hey.com']
    if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      if(acceptedEmail.includes(email.split('@')[1])){
        setEmailError(false)
      }else{
        setEmailError(true)
        return
      } 
    } else {
      setEmailError(true)
      return
    }

    
    if (!message.trim()) {
      setMessageError(true)
      return
    } else {
      setMessageError(false)
    }
  }

  const reset = () => {
    setToSend({
      subject: '',
      name: '',
      email: '',
      message: ''
    })
  }

  const handleClick = () => {
    validation(toSend.email, toSend.name, toSend.message);
  
    
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLICKEY
    
    
    
    
            // Using email.js to send emails https://www.emailjs.com/docs/sdk/installation/
      //  use .env to store ids and keys from email.js
      try {
        emailjs.send(serviceID, templateID, {
          subject: toSend.subject,
          name: toSend.name,
          email: toSend.email,
          message: toSend.message,
       },publicKey).then((result)=>{
         Swal.fire({
           icon:"success",
           title: "Message sent successfully"
         })
       })
       reset();
        
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: "error",
          title:"Ooops something went wrong",
          text:error.text,
        })
      }
    
  }


  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };


  return (
    <div className='mail' id='mail'>
      <h2>Get In Touch</h2>
      <div>
        <div className='entry'>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" autoComplete='off' value={toSend.name} onChange={handleChange} />
          </div>
          {nameError ? <p style={{ color: 'red' }}>Please input a name</p> : null}
          
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" autoComplete='off' value={toSend.email} onChange={handleChange} />
          </div>
          {emailError ? <p style={{ color: 'red' }}>Please input a valid email</p> : null}
          
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" cols="30" rows="10" value={toSend.message} onChange={handleChange}></textarea>
          </div>
          {messageError ? <p style={{ color: 'red' }}>Please input a message</p> : null}
          {/* <p style={{ color: 'red !important', display: 'none' }} ref={error}>Something is missing</p> */}
          <div className='btn' onClick={handleClick}>Send Message</div>
        </div>
      </div>
    </div>
  )
}

export default Mail
