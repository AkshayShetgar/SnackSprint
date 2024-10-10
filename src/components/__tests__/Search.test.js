import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import API_DATA from "../mocks/apiData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(API_DATA);
        },
    });
});

test("Should render the Body component with Search button", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const searchBtn = screen.getByRole("button", {name : "Search"});

    const inputBox = screen.getByPlaceholderText("Search the item here");

    expect(searchBtn).toBeInTheDocument();
});

test("Should render the Body component with Input Box", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const inputBox = screen.getByTestId("searchBox");

    expect(inputBox).toBeInTheDocument();
});

test("Should render the Body component with Card Data", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const searchBtn = screen.getByRole("button", {name : "Search"});

    const inputBox = screen.getByTestId("searchBox");

    fireEvent.change(inputBox, {target : {value : "burger"}});

    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(2);
});

test("Should render the Body component with Top Rated Component", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const topRatedBtn = screen.getByRole("button", {name : "Top Rated Restaurants"});

    fireEvent.click(topRatedBtn);

    const afterFilter = screen.getAllByTestId("resCard");

    expect(afterFilter.length).toBe(20);

});