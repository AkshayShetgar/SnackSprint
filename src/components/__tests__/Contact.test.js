import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
    
    test("Should load the contact us page component", () => {
        render(<Contact />)
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load paragrapgh inside the contact us page component", () => {
        render(<Contact />)
        const para = screen.getByRole("paragraph");
        expect(para).toBeInTheDocument();
    });
    
    
    test("Should load input inside the contact us page component", () => {
        render(<Contact />)
        const input = screen.getByPlaceholderText("Name")
        expect(input).toBeInTheDocument();
    });
})


