import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import { useDispatch } from "react-redux";
import { clearItem } from "../../utils/cartSlice";

const CartInfo = () => {

    const cartItems = useSelector((store) => store.cart.items);

    dispatch = useDispatch();
     const handleClearcart = () => {
        dispatch(clearItem());
     }

    return(
        <div className="text-center m-4 p-4">
            <h1 className="font-bold  text-lg font-serif">Cart</h1>
            <button onClick={handleClearcart} className="font-semibold text-lg font-serif rounded-lg bg-green-300 p-1">Clear Cart</button>
            {cartItems.length === 0 && <h1>Cart is empty add some items</h1>}
            <div className="w-6/12  m-auto">
                <CategoryList itemsData = {cartItems}/>
            </div>
        </div>
    )
}


export default CartInfo;