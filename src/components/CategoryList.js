import {addItem} from "../../utils/cartSlice";
import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";

const CategoryList = ({ itemsData }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    return (
        <div>
            {
                itemsData.map((item) => (
                    <div data-testid="food_list" className="border-b-2 text-left py-3 flex justify-between" key={item.card.info.id}>
                        <div className="w-4/5">
                            <h2 className="font-bold">{item.card.info.name}</h2>
                            <p>₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
                            <p className="text-sm overflow-hidden">{item.card.info.description}</p>
                        </div>

                        <div>
                            <img className="rounded-lg w-[156px] h-36" src={CDN_URL + item.card.info.imageId}></img>
                            <div>
                                <button onClick={() => handleAddItem(item)} className="text-green-500 border relative rounded-lg bg-gray-100 w-28 font-bold py-2 left-4 -top-3">ADD</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CategoryList;