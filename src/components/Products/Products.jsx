import { useEffect, useState } from "react";
import Product from "./Product";

const Products = ({selectedCategory}) => {
    const [products, setProducts] = useState([])

    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            const filterData = selectedCategory==='All Products' ? 
            data : data.filter((product)=> product.category===selectedCategory);
        setProducts(filterData)
        console.log(filterData)

        })
    }, [selectedCategory]) 
    // selectedcategory dile jokhon category button a chap dibo tokhon oi category er product aibo

    return (
        <div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products.map(product => <Product key={product.product_id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;