import CART_DATA from "../mocks/cartData.json";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import CartInfo from "../CartInfo";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(CART_DATA);
        }
    })
})


test("Sjhould load the Cart items", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <CartInfo />
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>
        )
    );

    const accordionHeading = screen.getByText("NEW CHICKEN ROLLS (15)");

    fireEvent.click(accordionHeading);

    const foodList = screen.getAllByTestId("food_list")

    expect(foodList.length).toBe(15);

    const addBtn = screen.getAllByRole("button", { name: "ADD" })

    fireEvent.click(addBtn[0]);

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtn[1]);

    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

    console.log(foodList.length);

    const cartItems = screen.getAllByTestId("cartInfo");
    console.log(cartItems.length);


})