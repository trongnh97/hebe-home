import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './img/homepage/logo.png';
import { Form } from 'react-bootstrap';
import UnstyledButtonCustom from './buttonFooter';

export default function Footer () {
    return(
        <div className="footer">
            <Container>
                <Row>
                    <Col lg={4}>
                        <Row style={{paddingTop: 40}}>
                            <Col md={6}>
                                <h6>COMPANY</h6>
                                <ul className="mt-3">
                                    <li>
                                        <a href="#">Our Story</a>
                                    </li>
                                    <li>
                                        <a href="#">Eureka</a>
                                    </li>
                                    <li>
                                        <a href="#">Projects</a>
                                    </li>
                                    <li>
                                        <a href="#">Thinkers</a>
                                    </li>
                                </ul>
                            </Col>
                            <Col md={6}>
                                <h6>INFORMATION</h6>
                                <ul className="mt-3">
                                    <li>
                                        <a href="#">Help</a>
                                    </li>
                                    <li>
                                        <a href="#">Feedback</a>
                                    </li>
                                    <li>
                                        <a href="#">Returns</a>
                                    </li>
                                    <li>
                                        <a href="#">Press</a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="text-center logo-footer" md={4}>
                        <img src={logo} alt=""/>
                        <h2>hebe</h2>
                        <p className="minimal">MINIMAL SHOP</p>
                    </Col>
                    <Col className="sub-form text-center">
                        <h5>Don't miss out on the latest</h5>
                        <p>Get noitified of new products, limited releases, and more.</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control className="add-email" size="lg" type="email" placeholder="Email address"/>
                            </Form.Group>
                            <UnstyledButtonCustom></UnstyledButtonCustom>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}