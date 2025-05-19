import { useEffect, useState } from 'react';
import axios from 'axios';

function Products(){
    const[products,setProducts]=useState([]);
    useEffect(()=>{
         axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(() => alert('Failed to load products'));
  }, []);
return(
    <div>
        <h2>Products</h2>
        <ul>
            {products.map(p=>(
                <li key={p.id}>{p.title}</li>
            ))}
        </ul>
    </div>
);
    }

export default Products;