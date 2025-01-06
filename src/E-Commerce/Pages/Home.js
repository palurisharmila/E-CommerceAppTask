import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Slices/ProductFetch';
import ProductList from './ProductList';
import SearchComponents from './SearchComponent';
import { addToCart } from '../Slices/CartSlice'; 
import { Typography, CircularProgress, Box, Pagination } from '@mui/material';

const Home = () => {
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector((state) => state.products);
    const [filteredProducts, setFilteredProducts] = useState(product);
    const [errorMessage,setErrorMessage]=useState('');
    const [currentPage,setCurrentPage] = useState(1);
    const productsPerPage =8;

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        setFilteredProducts(product); // Initialize with all products
    }, [product]);

    const handleSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        const filtered = product.filter(
            (item) =>
                item.title.toLowerCase().includes(lowerCaseQuery) ||
                item.category.toLowerCase().includes(lowerCaseQuery)
        );
        if(filtered.length===0){
            setErrorMessage("No products found")
        }
        else{
            setErrorMessage('');
        }
        setFilteredProducts(filtered);
        setCurrentPage(1); //Reset to the first page after search
    };
    
    const handleFilterChange = (filter) =>{
        let sortedProducts = [...filteredProducts];
        if(filter==='price'){
            sortedProducts.sort((a,b)=>a.price-b.price);
        }
        else if (filter==='rating'){
            sortedProducts.sort((a,b)=>b.rating-a.rating);
        }
        setFilteredProducts(sortedProducts);
    }
    const handleAddToCart = (product)=>{
        dispatch(addToCart(product));
    }

    const totalPages = Math.ceil(filteredProducts.length/productsPerPage);
    const startIndex = (currentPage-1) * productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex,startIndex+productsPerPage);
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    if (loading) {
        return (
            <Box sx={{ textAlign: 'center', marginTop: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Typography variant="h6" color="error" align="center">
                {error}
            </Typography>
        );
    }

    return (
        <Box sx={{ padding: 2 }}>
         <SearchComponents onSearch={handleSearch} onFilterChange={handleFilterChange} />
            {errorMessage && (
                <Typography variant='h6' color='error' align='center' sx={{marginY:2}}>{errorMessage}</Typography>
            )}
            <ProductList products={currentProducts} onAddToCart ={handleAddToCart}/>
            {totalPages >1 && (
                <Box sx={{display:'flex', justifyContent:'center', marginTop:4}}>
                    <Pagination 
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    variant="outlined"
                    shape="rounded"
                    />
                </Box>
            )}
        </Box>
    );
};

export default Home;
