import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container,Row,Col } from "react-bootstrap";
import contactImg from '../../assets/images/contact-img.svg'
import './contact.css';

const NewContact = () => {
  const form = useRef('');
  const[info, setInfo]=useState({ name:'', email:'', message:''})

  const inputHandler=(type,value)=>{
    setInfo({
      ...info,[type]:value
    })
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_v7uf206', 'template_rsmjsoq', form.current, 'uQoA37ea8pMpcM2Py')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setInfo({name:'',email:'',message:''})
  };

  return (
    <section className='contact' id='connect' >
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt="Contact us" />
          </Col>
          <Col>
            <h2>Get In Touch!</h2>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
              <Col sm={6} className="px-1">
                  <input type="text" name="user_name" placeholder='Name' value={info.name} onChange={(e)=>inputHandler('name',e.target.value)}  />
              </Col>
               <Col sm={6} className="px-1">
                  <input type="email" name="user_email" placeholder='Email' value={info.email} onChange={(e)=>inputHandler('email',e.target.value)}  />
               </Col>
                <Col className="px-1">
                  <textarea rows={6} cols={4} name="message" placeholder='Message me..' value={info.message}onChange={(e)=>inputHandler('message',e.target.value)}  />
                  <button className='submit-btn' type="submit" value="Send" >Send</button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>    
    </section>
  );
};

export default NewContact;