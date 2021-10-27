import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import aococ from './img/aococ.png';
import aokhoac from './img/aokhoac.png';
import binhnuoc from './img/binhnuoc.png';
import khan from './img/khan.png';
import giay from './img/giay.png';
import quan from './img/quan.png';
import vi from './img/vi.png';
import aothun from './img/aothun.png';

export default function ShopTopRate() {
    return(
        <Container>
            <Row>
                <Col lg={3} md={6} className="content position-relative">
                    <img src={quan} alt=""/>
                    <div className="title mt-3">
                        <p>Women's flyde classic outer</p>
                        <span>$ 320.00</span>
                    </div>
                    <div className="icons position-absolute text-center">
                        <i class="far fa-heart"></i>
                        <i class="fas fa-search"></i>
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                </Col>
                <Col lg={3} md={6} className="content position-relative">
                    <img src={vi} alt=""/>
                    <div className="title mt-3">
                        <p>Women's flyde classic outer</p>
                        <span>$ 320.00</span>
                    </div>
                    <div className="icons position-absolute text-center">
                        <i class="far fa-heart"></i>
                        <i class="fas fa-search"></i>
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                </Col>
                <Col lg={3} md={6} className="content position-relative">
                    <img src={giay} alt=""/>
                    <div className="title mt-3">
                        <p>Women's flyde classic outer</p>
                        <span>$ 320.00</span>
                    </div>
                    <div className="icons position-absolute text-center">
                        <i class="far fa-heart"></i>
                        <i class="fas fa-search"></i>
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                </Col>
                <Col lg={3} md={6} className="content position-relative">
                    <img src={khan} alt=""/>
                    <div className="title mt-3">
                        <p>Women's flyde classic outer</p>
                        <span>$ 320.00</span>
                    </div>
                    <div className="icons position-absolute text-center">
                        <i class="far fa-heart"></i>
                        <i class="fas fa-search"></i>
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5 mb-5">
                <Col lg={3} md={6} className="content position-relative">
                    <img src={binhnuoc} alt=""/>
                    <div className="title mt-3">
                        <p>Women's flyde classic outer</p>
                        <span>$ 320.00</span>
                    </div>
                    <div className="icons position-absolute text-center">
                        <i class="far fa-heart"></i>
                        <i class="fas fa-search"></i>
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                </Col>
                <Col lg={3} md={6} className="content position-relative">
                    <img src={aococ} alt=""/>
                    <div className="title mt-3">
                        <p>Women's flyde classic outer</p>
                        <span>$ 320.00</span>
                    </div>
                    <div className="icons position-absolute text-center">
                        <i class="far fa-heart"></i>
                        <i class="fas fa-search"></i>
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                </Col>
                <Col lg={3} md={6} className="content position-relative">
                    <img src={aokhoac} alt=""/>
                    <div className="title mt-3">
                        <p>Women's flyde classic outer</p>
                        <span>$ 320.00</span>
                    </div>
                    <div className="icons position-absolute text-center">
                        <i class="far fa-heart"></i>
                        <i class="fas fa-search"></i>
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                </Col>
                <Col lg={3} md={6} className="content position-relative">
                    <img src={aothun} alt=""/>
                    <div className="title mt-3">
                        <p>Women's flyde classic outer</p>
                        <span>$ 320.00</span>
                    </div>
                    <div className="icons position-absolute text-center">
                        <i class="far fa-heart"></i>
                        <i class="fas fa-search"></i>
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}