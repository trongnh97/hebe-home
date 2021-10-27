import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
import bannerboy1 from './img/homepage/bannerboy.png';
import bannerboy from './img/homepage/bannerboy1.png';

const banner = () =>{
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bannerboy}
                alt="First slide"
                />
                <Carousel.Caption>
                    <p class="wow fadeInUp" data-wow-delay=".6s">Our starting lineup</p>
                    <h1 class="wow fadeInUp" data-wow-delay=".6s">New Arrivals</h1>
                    <div>
                        <Button variant="outline-light">FOR MEN'S</Button>{' '}
                        <Button variant="outline-light">FOR WOMEN'S</Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bannerboy1}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <p class="wow fadeInUp" data-wow-delay=".4s">Our starting lineup</p>
                    <h1 class="wow fadeInUp" data-wow-delay=".6s">New Arrivals</h1>
                    <div>
                        <Button variant="outline-light">FOR MEN'S</Button>{' '}
                        <Button variant="outline-light">FOR WOMEN'S</Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default banner;