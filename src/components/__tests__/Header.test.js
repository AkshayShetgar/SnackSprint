import { render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("Should load the cart items ", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>

    );

    const cartItems = screen.getByText("Cart (0 items)");

    expect(cartItems).toBeInTheDocument();
});