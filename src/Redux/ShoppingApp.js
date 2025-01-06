import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addItem,removeItem } from './CartStore';

const ShoppingApp=()=> {
    const dispatch=useDispatch();
    const cart = useSelector(state=>state.ShoppingCart);

    const products=[
        {id:1,name:'Laptop',price:10000},
        {id:2,name:'Phone',price:1000},
        {id:3,name:'Headphones',price:2000}

    ]

    const handleAddItem=(item)=>{
        dispatch(addItem(item));
    }
    const handleRemoveItem =(id)=>{
        dispatch(removeItem(id));
    }
  return (
    <div style={{padding:'20px'}}>
        <h1>Shopping App</h1>
        <h2>Products</h2>
        <ul>
            {products.map((product)=>(
                <li key={product.id}>
                    {product.name} - {product.price}
                    <button style={{marginLeft:'10px'}} onClick={()=>handleAddItem(product)}> Add to Cart </button>
                </li>
            ))}
        </ul>
      <h2>Your Cart</h2>
      {cart.length===0 ? (<p> Your Cart is Empty</p>):(
        <ul>
            {cart.map(item=>(
                <li key={item.id}>
                    {item.name} - {item.price}
                    <button style={{marginLeft:'10px'}} onClick={()=>handleRemoveItem(item.id)}> Remove</button>
                </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default ShoppingApp
