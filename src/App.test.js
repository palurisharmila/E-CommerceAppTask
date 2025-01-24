import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router} from "react-router-dom";
import ProductCard from "../Pages/ProductCard";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe('ProductCard', () => {
    const mockProduct = {
        id: 1,
        title: 'Test Product',
        price: 99.22,
        rating: 4.5,
        image: 'OIP.jpg',
    };
    const mockAddToCart = jest.fn();
    const mockNavigate = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders product details correctly', () => {
        render(
            <ProductCard product={mockProduct} onAddToCart={mockAddToCart} />,
            { wrapper: Router }
        );
        expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
        expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();
        expect(screen.getByText(`Rating: ${mockProduct.rating}`)).toBeInTheDocument();
        expect(screen.getByAltText(mockProduct.title)).toHaveAttribute('src', mockProduct.image);
    });

    test('navigate to product details on image click', () => {
        render(
            <ProductCard product={mockProduct} onAddToCart={mockAddToCart} />,
            { wrapper: Router }
        );
        const image = screen.getByAltText(mockProduct.title);
        fireEvent.click(image);

        expect(mockNavigate).toHaveBeenCalledWith(`/product/${mockProduct.id}`);
    });

    test('calls onAddToCart with correct product on button click', () => {
        render(
            <ProductCard product={mockProduct} onAddToCart={mockAddToCart} />,
            { wrapper: Router }
        );

        const addToCartButton = screen.getByText(/Add To Cart/i);
        fireEvent.click(addToCartButton);

        expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
    });
});
