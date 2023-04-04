import React,{useState,useEffect} from 'react'
import './banner.css'
import { Container,Row,Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import header from '../../assets/images/header-img.svg'

const Banner = () => {
   const [ text,setText ] = useState('');
   const [ loop,setLoop ] = useState(0);
   const [ isDeleting,setDeleting ] = useState(false);
   const [ delta, setDelta ] = useState(300 - Math.random()*100)
   const toRotate = ["Web Developer.","Web Designer.","UI/UX Designer."]
   const preiod=2000;

   useEffect(()=>{
    const ticker=setInterval(()=>{
        tick();
    },delta)
    return ()=>{ clearInterval(ticker)}
   },[text])

   const tick=()=>{
    let i = loop % toRotate.length;
    let fullText=toRotate[i];
    let updatedText= isDeleting? fullText.substring(0, text.length-1): fullText.substring(0, text.length+1)
    setText(updatedText)
    if (isDeleting) {
        setDelta(previous => previous/2)
    }
    if (!isDeleting && updatedText === fullText) {
        setDeleting(true)
        setDelta(preiod)
    } else if (isDeleting && updatedText==='') {
        setDeleting(false);
        setLoop(loop+1);
        setDelta(500);
    }
   }

  return (
    <section className='banner' id='home' >
        <Container>
            <Row className='align-items-center' >
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline' >Welcome to my Portfolio</span>
                    <h1>{`Hi, I'm a resilient `} <br /> <span className='wrap' >{text}</span></h1>
                    <p>Don't forget that the world is very claver in which I'm not out of the range.</p> 
                    <button onClick={()=>console.log('object')}>Let's connect <ArrowRightCircle size={22}/> </button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={header} alt="header image" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner;
