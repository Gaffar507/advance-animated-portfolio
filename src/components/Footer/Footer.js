import { Container,Row,Col } from "react-bootstrap";
import logo from '../../assets/images/logo.svg';
import navIcon1 from "../../assets/images/nav-icon1.svg";
import navIcon2 from "../../assets/images/nav-icon2.svg";
import navIcon3 from "../../assets/images/nav-icon3.svg";
import './footer.css';

const Footer=()=>{
    return(
        <footer className="footer" id="">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6} className="text-center text-lg-start pb-3">
                        <img src={logo} alt="footer logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icons">
                            <a href="#"><img src={navIcon1} alt="icon" /></a>
                            <a href="#"><img src={navIcon2} alt="icon" /></a>
                            <a href="#"><img src={navIcon3} alt="icon" /></a>
                        </div>
                        <p>@CopyRight 2023, All Right Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;