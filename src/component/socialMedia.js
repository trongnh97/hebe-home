import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import jcbLogo from './img/homepage/logoJCB.png';
import maestroLogo from './img/homepage/logoMaestro.png';
import paypalLogo from './img/homepage/logoPaypal.png';
import visaLogo from './img/homepage/logoVisa.png';

export default function SocialMedia () {
    return(
        <div className="social-media">
            <Container>
                <Row>
                    <Col lg={4}>
                        <ul>
                            <li>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fab fa-facebook-messenger"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fab fa-instalod"></i></a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center align-items-center" style={{color: '#fff'}}>
                        <i class="far fa-copyright"></i>
                        <p style={{marginLeft: 10, marginTop: 15}}>2021 Famithemes. All rights reserved</p>
                    </Col>
                    <Col className="pay d-flex justify-content-center align-items-center" lg={4}>
                        <a href="#"><img src={visaLogo} alt="visa logo"/></a>
                        <a href="#"><img src={jcbLogo} alt=" jcb logo"/></a>
                        <a href="#"><img src={paypalLogo} alt="paypal logo"/></a>
                        <a href="#"><img src={maestroLogo} alt="maestro logo"/></a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}