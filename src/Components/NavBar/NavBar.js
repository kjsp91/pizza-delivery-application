import './NavBar.css'
import {  Link,Route,Routes } from 'react-router-dom';
import Custom from '../CustomComplete/Custom';
import Complete from '../Complete/Complete';
import Reviews from '../Reviews/Reviews';
import Cart from '../Cart/Cart';
function NavBar(){
    return(
        <>
        <nav>
          <ul>
            <li><Link className='link' to="/">HOME</Link></li>
            <li><Link className='link' to="/custom">CUSTOMIZE</Link></li>
            <li><Link className='link' to="/review">REVIEWS</Link></li>
            <li><Link className='link' to="/cart">CART</Link></li>
          </ul>
        </nav>  
        <Routes>
          <Route exact path="/" element={<Complete/>}></Route>
          <Route exact path="/custom" element={<Custom/>}></Route>
          <Route exact path="/review" element={<Reviews/>}></Route>
          <Route exact path="/cart" element={<Cart/>}></Route>
        </Routes> 
</>
    )
}
export default NavBar;