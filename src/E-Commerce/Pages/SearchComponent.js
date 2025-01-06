import React, { useState } from 'react';
import { TextField, Box , FormControl, InputLabel, Select, MenuItem} from '@mui/material';



const SearchBox = ({ onSearch,onFilterChange }) => {
    const [searchValue, setSearchValue] = useState('');
    const [filter,setFilter]=useState('');


    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        onSearch(value); // Trigger the parent component's search handler
    };
    
    const handleFilterChange=(event)=>{
        const value=event.target.value;
        setFilter(value);
        onFilterChange(value); // Trigger the parent component's filter handler
    }
    return (
        <Box sx={{ marginBottom: 2, textAlign: 'center', display:'flex' , gap:'5px'}}>
            <TextField
                label="Search by Product or Category"
                variant="outlined"
                fullWidth
                value={searchValue}
                onChange={handleSearch}
                sx={{width:"300%" , marginRight:"190px" , marginLeft:"20px"}}
            />
            <FormControl variant='outlined' sx={{minWidth:200 , marginRight:"60px"}}>
                <InputLabel>Sort By</InputLabel>
                <Select value={filter} onChange={handleFilterChange} label="Sort By">
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="price">Price (Low to High)</MenuItem>
                    <MenuItem value="rating">Rating (High to Low)</MenuItem>
                </Select>
            </FormControl>
          
        </Box>
    );
};

export default SearchBox;