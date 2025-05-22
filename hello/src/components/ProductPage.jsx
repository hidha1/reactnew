import React,{useEffect,useState} from 'react'
import{useSearchParams} from 'react-router-dom';
import axios from 'axios';

const ProductPage =()=>{
    const [products, setProducts] = useState([]);
    const [searchParams,setSearchParams]=useSearchParams();
    const page = parseInt(searchParams.get("page")) || 1;
    
    const productsPerPage=4;
    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
             .then(res => setProducts(res.data.products))
             .catch(err => console.error(err));
    },[]);

    const startIndex=(page -1)* productsPerPage
    const pageinatedProducts= products.slice(startIndex, startIndex + productsPerPager);
    const totalPage = Math.ceil(products.length/productsPerPage);
    const changePage = (newPage) =>{
        if(newPage >=1 && newPage<= totalPage){
            setSearchparams({page: newPage});
        }
    }
    return (
        <div className ="container mt 5">
            <h2 className ="text-center mb-4"> Product List(page{page})</h2>
            <div className='row'>
            {pageinatedProducts.map(products =>(
                <div key = {products.id} className ="col-md-6 mb-4">
                <div className="card h-100">
                <img src={products.thumbnail} className="card-img-top" alt={products.title}/>
                <div className='card-body'>
                    <h5 className='card-title'>{products.title}</h5>
                    <p className='card-text'>{productPerPage.price}</p>
                    </div>
                </div>
             </div>
            ))}
        </div>
                <div className='pagination-controls'>
                <button className='btn btn-primay' disabled={page===1} onClick={()=> changePage(page-1)}>Previous</button>
                <button className='btn btn-primary' disabled={page===totalPage} onClick={()=>changePage(page+1)}>Next</button>

                </div>              
                 </div>

    

    );
};
export default ProductPage;