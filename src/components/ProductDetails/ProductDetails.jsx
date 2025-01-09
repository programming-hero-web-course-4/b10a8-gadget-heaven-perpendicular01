import { useLoaderData } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { ToastContainer, toast, Bounce } from 'react-toastify';

import { list } from "postcss";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartProvider/CartProvider";
import { WishListContext } from "../../Context/WishListProvider/WishListProvider";
import { CostContext } from "../../Context/CostProvider/CostProvider";
import Rating from "../Rating/Rating";


const ProductDetails = () => {
    const { cart, setCart } = useContext(CartContext)
    const { wishList, setWishList } = useContext(WishListContext)
    const { cost, setCost } = useContext(CostContext)


    // from root
    const product = useLoaderData();
    // console.log(product)
    const { product_id, product_title, product_image, category, price, description, Specification,
        availability, rating } = product


    const handleAddToCart = () => {
        // console.log(product)
        setCost(cost + price)
        setCart([...cart, product])

        toast.success('Product added to Cart', {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
            transition: Bounce,
        });
    }


    const handleAddToWishList = () => {
        // console.log(product_id)


        if (wishList.some(p => p.product_id === product_id)) {
            toast.error('Already Added to WistList', {
                position: "top-center",
                autoClose: 5000,
                theme: "dark",

            });

            return;
        }

        setWishList([...wishList, product])



        toast.success('Product added to WishList', {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",

        });
    }





    return (
        <div>
            <div className="bg-purple text-center text-white pb-40">
                <h3 className="pt-8 text-2xl md:text-3xl lg:text-4xl mb-4 font-bold">Product Details</h3>
                <p className="w-[50%] mx-auto text-base font-light">Explore the latest gadgets that will take your experience to the next level.
                    From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div className="w-[90%] mx-auto bg-white bg-opacity-90 p-5 rounded-2xl -mt-28">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="w-[98%] md:w-[30%]">
                        <img className="mx-auto object-cover rounded-2xl" src={product_image} alt="" />
                    </div>

                    <div className="w-[90%] md:w-[65%] md:ml-10 mt-8 md:mt-0">
                        <h2 className="mb-2 md:mb-4 text-3xl lg:text-4xl font-semibold ">{product_title}</h2>
                        <h2 className="text-base text-gray-600 font-semibold mb-2 md:mb-4">Price: ${price}</h2>


                        {availability ? <span className="px-2 py-1 bg-green-100 text-sm text-green-700 border-[1px] font-semibold rounded-2xl border-green-800 "> In Stock </span>
                            : <span className="px-2 py-1 bg-green-100 text-sm text-green-700 border-[1px] font-semibold rounded-2xl border-green-800 "> Stock Out </span>}

                        <p className="text-gray-500 my-2 md:my-3">{description}</p>
                        <h2 className="text-black font-bold my-2 md:mb-4">Specification:</h2>
                        <ol className="list-decimal pl-5 text-sm mb-3 md:mb-5">
                            {Specification.map((it, index) => (
                                <li key={index}>{it}</li>
                            ))}
                        </ol>


                        <h2 className="text-black font-bold my-2 md:my-4">Rating</h2>

                        <div className="flex items-center gap-5">
                            <Rating rating={rating}></Rating>
                            <div className="text-lg font-medium">{rating}</div>
                        </div>

                        <div className="flex items-center gap-4 my-4">
                            <button onClick={handleAddToCart} className="text-base  rounded-full flex justify-center items-center gap-1 px-3 py-2 bg-purple   text-white"> Add to cart <AiOutlineShoppingCart className="text-xl"></AiOutlineShoppingCart></button>
                            <div onClick={handleAddToWishList} className="h-12 w-12 text-2xl border-[1px] rounded-full flex justify-center items-center bg-white border-gray-300 text-black"> <AiOutlineHeart> </AiOutlineHeart></div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;