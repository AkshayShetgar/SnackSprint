import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCard.json";
import "@testing-library/jest-dom";

test("Should render the RestaurantCard component with the props data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("McDonald's");
    expect(name).toBeInTheDocument();
});