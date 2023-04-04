import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container,Row,Col } from 'react-bootstrap';
import { ArrowDownCircle } from 'react-bootstrap-icons';
import meter1 from '../../assets/images/meter1.svg';
import meter2 from '../../assets/images/meter2.svg';
import meter3 from '../../assets/images/meter3.svg';
import colorShirp from '../../assets/images/png-img/color-sharp.png';
import './skills.css';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skill' id='skills'>
     <Container>
        <Row>
            <Col>
                <div className="skills-box">
                    <div className="header">
                        <h2>All my skills here </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span className='down-icon'>{<ArrowDownCircle size={25}/>}</span>
                    </div>
                    <Carousel responsive={responsive} infinite={true} className='skills-slider'>
                        <div className='item'>
                            <img src={meter1} alt="skill" />
                            <h5>Web Development</h5>
                        </div>
                        <div className='item'>
                            <img src={meter2} alt="skill" />
                            <h5>Web Design</h5>
                        </div>
                        <div className='item'>
                            <img src={meter3} alt="skill" />
                            <h5>UI/UX Design</h5>
                        </div>
                        <div className='item'>
                            <img src={meter1} alt="skill" />
                            <h5>Stock Market</h5>
                        </div>
                    </Carousel>
                </div>
            </Col>
        </Row>
     </Container>
     <img src={colorShirp} alt="background" className='skill-bg' />
    </section>
  )
}

export default Skills
