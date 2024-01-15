import './Complete.css';
import Menu from '../Menu/Menu'
import pizzas from '../../pizza'
import Hero from '../Hero/Hero';

function Complete(){
    return(
        <>
        <Hero/>
        <h1 className='title'>MENU</h1>
        <div className="card-style">
        {pizzas.map((x)=> <Menu id={x.id} key={x.id} image={x.imageURL} name={x.name} dcpn = {x.description} price={x.price} />)}
        </div>
        </>
    )
} 
export default Complete;