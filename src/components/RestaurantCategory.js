import CategoryList from "./CategoryList";

const RestaurantCategory = ({cardData, showItems, setShowIndex}) => {

    const clickHandle = () => {
        setShowIndex();
    }

    return(
        <div className="shadow-lg my-4 w-6/12 mx-auto p-3 font-sans font-semibold cursor-pointer" onClick={clickHandle}>
            <div className="flex justify-between">
                <span>{cardData.title} ({cardData.itemCards.length})</span>
                <span>ʌ</span>
            </div>
            { showItems && <CategoryList itemsData = {cardData.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory;