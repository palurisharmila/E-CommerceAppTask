import React,{useEffect,useState} from "react";  
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchByCategory } from "../Slices/ProductFetch";
import ProductList from "./ProductList";
import { addToCart } from "../Slices/CartSlice";
import { CircularProgress,Box,Typography } from "@mui/material";
import SearchComponents from "./SearchComponent";


const Category =()=>{
    const {category} =useParams();
    const dispatch=useDispatch();
    const {product,loading,error}=useSelector((state)=>state.products);
    const [filteredProducts, setFilteredProducts] = useState(product);
    const [errorMessage,setErrorMessage]=useState('');
    

    useEffect(()=>{
        dispatch(fetchByCategory(category));
    },[dispatch,category]);

    useEffect(() => {
            setFilteredProducts(product); // Initialize with all products
        }, [product]);
    
    const handleAddToCart = (product)=>{ 
            dispatch(addToCart(product));
        }

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

    if(loading) {
        return (
            <Box textAlign="center" mt={4}>
                <CircularProgress></CircularProgress>
            </Box>
    )
}
if(error) return <p>Error:{error}</p>

return (
    <Box>
    <Typography variant="h4" gutterBottom align="center">
        {category.charAt(0).toUpperCase() + category.slice(1)} Products
      </Typography>
      <SearchComponents onSearch={handleSearch} onFilterChange={handleFilterChange} /> 
            {errorMessage && (
                <Typography variant='h6' color='error' align='center' sx={{marginY:2}}>{errorMessage}</Typography>
            )}
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart}/>
      </Box>
) 

};

export default Category;
