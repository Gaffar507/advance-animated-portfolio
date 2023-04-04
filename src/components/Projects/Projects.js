import React from 'react'
import projImg1 from "../../assets/images/png-img/project-img1.png";
import projImg2 from "../../assets/images/png-img/project-img2.png";
import projImg3 from "../../assets/images/png-img/project-img3.png";
import colorSharp2 from "../../assets/images/png-img/color-sharp2.png";
import './projects.css';
import { Col, Container, Row, Tab,Nav } from 'react-bootstrap';
import Card from './Card';

const Projects = () => {
    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];
    
  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
            <Col>
                <div>
                    <h2>Project</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, deserunt?</p>
                    <Tab.Container id='projects-tabs' defaultActiveKey="first">
                        <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center'>
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                                <Row>
                                    {projects.map((info,index)=>{
                                        return <Card key={index} {...info}/>
                                    })}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, enim temporibus minima non omnis ea pariatur molestiae illum voluptate libero aliquam, mollitia autem blanditiis saepe veritatis possimus iusto quas delectus!
                            </Tab.Pane>
                            <Tab.Pane eventKey='third'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quis, quidem quibusdam earum excepturi amet voluptas, deserunt sunt enim laboriosam iure dolores cupiditate. Sed, suscipit? Ab inventore numquam delectus vitae.
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </Col>
        </Row>
      </Container>
      <img className='background-img' src={colorSharp2} alt="background image" />
    </section>
  )
}

export default Projects
