import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductCard from "../Pages/ProductCard";
import '@testing-library/jest-dom'
 
// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: () => jest.fn(),
// }));
const mockedNavigator = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")), // technically it passes without this too, but I'm not sure if its there for other tests to use the real thing so I left it in
  useNavigate: () => mockedNavigator,
}));
 
 
describe("ProductCard Component", () => {
  const product = {
    id: 1,
    title: "Test Product",
    price: 99.99,
    rating: 4.5,
    image: "test-image.jpg",
  };
 
  const mockOnAddToCart = jest.fn();
 
  const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
  };
 
 
  test("renders product details correctly", () => {
    renderWithRouter(<ProductCard product={product} onAddToCart={mockOnAddToCart} />);
 
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$99.99")).toBeInTheDocument();
    expect(screen.getByText("Rating : 4.5")).toBeInTheDocument();
 
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "test-image.jpg");
    expect(image).toHaveAttribute("alt", "Test Product");
  });
 
  test("navigates to product detail page on image click", () => {
    renderWithRouter(<ProductCard product={product} onAddToCart={mockOnAddToCart} />);
 
    const image = screen.getByRole("img");
    fireEvent.click(image);
 
    expect(window.location.pathname).toBe(`/product/${product.id}`);
  });
 
  test("calls onAddToCart handler when 'Add to Cart' button is clicked", () => {
    renderWithRouter(<ProductCard product={product} onAddToCart={mockOnAddToCart} />);
 
    const addToCartButton = screen.getByRole("button", { name: /add to cart/i });
    fireEvent.click(addToCartButton);
 
    expect(mockOnAddToCart).toHaveBeenCalledTimes(1);
    expect(mockOnAddToCart).toHaveBeenCalledWith(product);
  });
});