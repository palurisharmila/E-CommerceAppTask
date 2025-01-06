import React from 'react';
import { AppBar, Toolbar, Typography, Box, Switch, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchProducts } from '../Slices/ProductFetch';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Navbar = ({ toggleTheme, currentTheme }) => {
    const linkStyles = {
        textDecoration: 'none',
        color: 'inherit',
        padding: '0 10px',
        fontSize: '16px',
        transition: 'color 0.3s',
    };

    const activeLinkStyles = {
        ...linkStyles,
        fontWeight: 'bold',
        color: '#FFD700', // Gold color for active tabs
        borderBottom: '2px solid #FFD700', // Underline for active tabs
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const categories = [
        "beauty",
        "fragrances",
        "groceries",
        "home-decoration",
        "kitchen-accessories",
        "laptops",
        "sunglasses",
        "tops",
    ]
    const { product, loading, error } = useSelector((state) => state.products);
    const [filteredProducts, setFilteredProducts] = useState(product);
    const [errorMessage, setErrorMessage] = useState('');

    const [selectedCategory, setSelectedCategory] = useState("");
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        if (category === "") {
            navigate("/")
        }
        else {
            navigate(`/category/${category}`)

        }
    };
    // const handleSearch = (query) => {
    //     const lowerCaseQuery = query.toLowerCase();
    //     const filtered = product.filter(
    //         (item) =>
    //             item.title.toLowerCase().includes(lowerCaseQuery) ||
    //             item.category.toLowerCase().includes(lowerCaseQuery)
    //     );
    //     if (filtered.length === 0) {
    //         setErrorMessage("No products found")
    //     }
    //     else {
    //         setErrorMessage('');
    //     }
    //     setFilteredProducts(filtered);
    // };

    // const handleFilterChange = (filter) => {
    //     let sortedProducts = [...filteredProducts];
    //     if (filter === 'price') {
    //         sortedProducts.sort((a, b) => a.price - b.price);
    //     }
    //     else if (filter === 'rating') {
    //         sortedProducts.sort((a, b) => b.rating - a.rating);
    //     }
    //     setFilteredProducts(sortedProducts);
    // }
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    E-Commerce
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, alignItems: "center" }}>
                    <NavLink to="/" style={({ isActive }) => (isActive ? activeLinkStyles : linkStyles)}> HOME </NavLink>
                 
                    <FormControl variant='outlined' sx={{ minWidth: 100, marginRight: "60px" }}>
                        <Select
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            // displayEmpty sx={{}}
                            displayEmpty inputProps={{
                                "aria-label" : "Category",
                            }}
                            sx={{
                                minWidth: 150, color: "inherit", borderRadius: "30px" , border:"solid"
                            }}
                        >
                             <MenuItem value="" disabled>Select Category</MenuItem>
                            {categories.map((category) => (
                                <MenuItem key={category} value={category} component={NavLink} to={`/category/${category}`}>
                                    {category.replace("-"," ").toUpperCase() }
                                    
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Switch checked={currentTheme === "dark"} onChange={toggleTheme}></Switch>
                    <NavLink to="/Cart" style={({ isActive }) => (isActive ? activeLinkStyles : linkStyles)}> CART </NavLink>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
