import {Link} from "react-router-dom"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import Search from '@mui/icons-material/Search';
import {useState} from 'react';
//import MobileMenu from '@mui/icons-material/Menu';


const NavBar = () => {

    const [cartOpen,setCartOpen] =useState(false)
    return (
        <div className="nav-bar">
            <div className="nav-container">
                <div className="nav-left-items">
                    <div className="string-nav">
                        <Link className="string-link" to="/products/1">Strings</Link>
                    </div>
                    <div className="percussion-nav">
                        <Link className="percussion-link" to="/products/2">Percussion</Link>
                    </div>
                    <div className="keyboard-nav">
                        <Link className="keyboard-link" to="/products/3">Keyboard</Link>
                    </div>
                </div>

                <div className="nav-right-items">
                    <div className ="nav-to-home">Home</div>
                    <div className="to-about-page">About</div>
                    <div className="to-contact-page">Contact</div>
                    <div className="search-icon">
                        <Search/>
                        </div>
                    <div className="cart-icon" onClick={()=>{setCartOpen(true)}}>
                        <ShoppingCartIcon/>
                        <span className="cart-count">0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar;