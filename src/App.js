import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar';
import Carousel from './component/banner';
import FormControl from './component/money';
import Box from './component/tabs';
import './component/style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import MediaCard from './component/blog/blog1';
import MediaCard1 from './component/blog/blog2';
import MediaCard2 from './component/blog/blog3';
import IgShop from './component/instagramShop';
import Footer from './component/footer';
import SocialMedia from './component/socialMedia';

import boy from './component/img/homepage/boy.png';
import girl from './component/img/homepage/girl.png';
import bag from './component/img/homepage/bag.png';
import giaycaogot from './component/img/homepage/giaycaogot.png';
import freeship from './component/img/homepage/freeship.png';
import email from './component/img/homepage/email.png';
import bobien from './component/img/homepage/bobien.png';
import insta1 from './component/img/homepage/insta1.png';
import insta2 from './component/img/homepage/insta2.png';
import insta3 from './component/img/homepage/insta3.png';
import insta4 from './component/img/homepage/insta4.png';
import insta5 from './component/img/homepage/insta5.png';
import insta6 from './component/img/homepage/insta6.png';
import insta7 from './component/img/homepage/insta7.png';
import pen from './component/img/homepage/pen.png';
import sand from './component/img/homepage/sand.png';

function App() {
  return (
    <div>
      {/*========== chon loai tien ============*/}
      <FormControl></FormControl>

      {/*========== header ===========*/}
      <Navbar></Navbar>

      {/*========== banner ===========*/}
      <Carousel></Carousel>

      {/*========== start div images ============*/}
      <Container style={{paddingTop: '100px'}}>
        <Row>
          <Col className="wow fadeInLeftBig" lg={6}>
            <Row>
              <Col lg={6}>
                <a href='#'><img src={boy} alt=''/></a>
              </Col>
              <Col lg={6}>
                <a href=""><img src={bag} alt=''/></a>
              </Col>
            </Row>
              <a href=""><img className="giaycaogot mt-3 mb-3" src={giaycaogot} alt=''/></a>
          </Col>
          <Col className="wow fadeInRightBig" lg={6}>
            <a href=""><img src={girl} alt=''/></a>
          </Col>
        </Row>
      </Container>
      {/*========== end div images ===========*/}

      {/*========== start shopping cart ============*/}
      <div className="tabs-shopping">
        <Box></Box>
      </div>
      {/*========== end shopping cart ============*/}

      {/*========== start free ship ============*/}
      <div className="free-ship wow bounceInUp" data-wow-delay="0.5s">
        <Container>
          <Row>
            <Col style={{color: '#fff', position: 'relative', textAlign: 'center'}}>
              <img src={freeship} alt=""/>
              <div className="content">
                <h2 className="mb-3">Free shipping worldwide on all baskets over 600 USD.</h2>
                <p>Shipping & Returns</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/*========== end free ship ============*/}

      {/*========== start blog ============*/}
      <Container className="blog wow fadeInUp" style={{paddingTop: 70}}>
        <div className="title text-center mb-5 wow fadeInUp">
          <h2>From our blog</h2>
        </div>
        <Row>
          <Col lg={4}>
            <MediaCard></MediaCard>
          </Col>
          <Col lg={4}>
            <MediaCard1></MediaCard1>
          </Col>
          <Col lg={4}>
            <MediaCard2></MediaCard2>
          </Col>
        </Row>
        <Row className="mt-5 align-items-center sub-form">
          <Col className='d-flex align-items-center wow fadeInUp' lg={7}>
            <img src={email} alt="send email"/>
            <h4>Sign up to enjoy free U.S shipping and returns on your first order</h4>
          </Col>
          <Col lg={5}>
            <Form>
              <Form.Group className="mb-3 d-flex align-items-center position-relative wow fadeInUp" controlId="exampleForm.ControlInput1">
                <Form.Control className="add-email" type="email" placeholder="Email address" />
                <i class="fas fa-angle-double-right position-absolute end-0"></i>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      {/*========== end blog ============*/}

      {/*========== start instagram shop ============*/}
      <IgShop></IgShop>
      <div className="ig-shop-img mt-5 d-flex wow slideInLeft">
        <div className="content">
          <div className="overlay text-center">
            <a href="#">
              <i class="fab fa-instagram"></i>
              <h6>SHOP IT</h6>
            </a>
          </div>
          <img src={bobien} alt=""/>
        </div>
        <div className="content">
          <div className="overlay text-center">
            <a href="#">
              <i class="fab fa-instagram"></i>
              <h6>SHOP IT</h6>
            </a>
          </div>
          <img src={pen} alt=""/>
        </div>
        <div className="content">
          <div className="overlay text-center">
            <a href="#">
              <i class="fab fa-instagram"></i>
              <h6>SHOP IT</h6>
            </a>
          </div>
          <img src={sand} alt=""/>
        </div>
        <div className="content">
          <div className="overlay text-center">
            <a href="#">
              <i class="fab fa-instagram"></i>
              <h6>SHOP IT</h6>
            </a>
          </div>
          <img src={insta1} alt=""/>
        </div>
        <div className="content">
          <div className="overlay text-center">
            <a href="#">
              <i class="fab fa-instagram"></i>
              <h6>SHOP IT</h6>
            </a>
          </div>
          <img src={insta2} alt=""/>
        </div>
      </div>
      
      <div className="ig-shop-img d-flex wow slideInRight">
        <div className="content">
          <div className="overlay text-center">
            <a href="#">
              <i class="fab fa-instagram"></i>
              <h6>SHOP IT</h6>
            </a>
          </div>
          <img src={insta3} alt=""/>
        </div>
        <div className="content">
          <div className="overlay text-center">
            <a href="#">
              <i class="fab fa-instagram"></i>
              <h6>SHOP IT</h6>
            </a>
          </div>
          <img src={insta4} alt=""/>
        </div>
        <div className="content">
          <div className="overlay text-center">
            <a href="#">
              <i class="fab fa-instagram"></i>
              <h6>SHOP IT</h6>
            </a>
          </div>
          <img src={insta5} alt=""/>
        </div>
        <div className="content">
          <div className="overlay text-center">
            <a href="#">
              <i class="fab fa-instagram"></i>
              <h6>SHOP IT</h6>
            </a>
          </div>
          <img src={insta6} alt=""/>
        </div>
        <div className="content">
          <div className="overlay text-center">
            <a href="#">
              <i class="fab fa-instagram"></i>
              <h6>SHOP IT</h6>
            </a>
          </div>
          <img src={insta7} alt=""/>
        </div>
      </div>
      {/*========== end instagram shop ============*/}

      {/*========== start footer ============*/}
      <Footer></Footer>
      {/*========== end footer ============*/}

      {/*========== start social media ============*/}
      <SocialMedia></SocialMedia>
      {/*========== end social media ============*/}
    </div>
  );
}
export default App;
