import { Link } from "react-router-dom";

const Product = ({product}) => {
    const {product_id, product_image, product_title, price} = product 
    return (
        <div className="max-h-[380px] text-black bg-white rounded-lg p-4">
            <div className="h-[60%] w-[80%] mx-auto  bg-gray-300 rounded-lg mb-4">
                <img className="w-full h-full  rounded-xl self-center" src={product_image} alt="" />
            </div>
            <h2 className="mb-3 font-semibold text-xl">{product_title}</h2>
            <p className="mb-2 font-medium text-base text-gray-500">Price: ${price}</p>
            <Link to={`products/${product_id}`}><button className="text-purple px-3 py-2 border-purple rounded-3xl font-semibold border-[2px] mb-0 "> View Details </button></Link>
            
        </div>
    );
};

export default Product;