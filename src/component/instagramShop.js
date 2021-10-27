import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import igLogo from './img/homepage/instagram.png';

export default function IgShop() {
    return(
        <Container>
            <Row className="ig-shop">
                <div className="title text-center">
                    <img className="mb-3" src={igLogo} alt="IG logo"/>
                    <h3>Instagram Shop</h3>
                </div>
            </Row>
        </Container>
    );
}