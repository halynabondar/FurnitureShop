import heart from "../assets/heart.png";
import cart from "../assets/Cart.svg";
import photo from "../assets/photo.png";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h2 className='logo'>Funiro.</h2>
            <ul className="list">
                <li className="nav-item">Products</li>
                <li className="nav-item">Rooms</li>
                <li className="nav-item">Inspirations</li>
            </ul>
            <div>
                <input className='search-bar' placeholder="Search for minimalist chair" type="text"/>
            </div>
            <div className="user-items">
                <div className="user-item">
                    <img src={heart} alt='heart'/>
                </div>
                <div className="user-item">
                    <img src={cart} alt='cart'/>
                </div>
                <div className="user-item">
                    <img src={photo} alt='photo'/>
                </div>
            </div>
        </nav>
    )
}