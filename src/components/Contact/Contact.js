import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import contactImg from '../../assets/images/contact-img.svg'

import './contact.css';

const Contact=()=>{
    const formInitialValues={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }
    const[formDetails, setFormDetails]=useState(formInitialValues);
    const[status,setStatus]=useState({})
    const[buttonText,setButtonText]=useState('Send')
 

    const handleInput=(types, value)=>{
        setFormDetails({
            ...formDetails,[types]:value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    }


    return(
        <section className="contact" id="connect">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt="Contact us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch!</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=>handleInput('firstName',e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=>handleInput('lastName',e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e)=>handleInput('email',e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e)=>handleInput('phone',e.target.value)} />
                                </Col>
                                <Col >
                                    <textarea row={6} type="message" value={formDetails.message} placeholder="Your message" onChange={(e)=>handleInput('message',e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {status.message&&
                                    <Col>
                                        <p className={status.message===false? 'danger':'success'}>
                                            {status.message}
                                        </p>
                                    </Col>}
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Contact;