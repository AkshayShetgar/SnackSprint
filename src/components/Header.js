import {LOGO} from "../../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {

    const {UserLoggedIn} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);

    return (
        <div className="flex justify-between align-middle border-b-2 shadow-lg">
            <div className="w-28">
                <img className=" flex align-middle w-28 h-24"  src={LOGO}></img>
            </div>
            <div className="flex align-middle font-serif font-semibold">
                <ul className="flex p-5 m-5">
                    <li className=" hover:text-orange-400"><Link className="px-4" to="/grocery">Grocery</Link></li>
                    <li className=" hover:text-orange-400"><Link className="px-4" to="/">Home</Link></li>
                    <li className=" hover:text-orange-400"><Link className="px-4" to="/About">About Us</Link></li>
                    <li className=" hover:text-orange-400"><Link className="px-4" to="/Contact">Contact</Link></li>
                    <li className=" hover:text-orange-400"><Link className="px-4" to="/cart">Cart ({cartItems.length} items)</Link></li>
                    <li className=" hover:text-orange-400"><Link className="px-4" to="/">User : {UserLoggedIn}</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;