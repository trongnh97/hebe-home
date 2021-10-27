import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar';
import FormControl from './component/money';
import './component/style.css';
import Banner from './componentShop/banner';

export default function AppShop (){
    return(
        <div>
            <FormControl></FormControl>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
}