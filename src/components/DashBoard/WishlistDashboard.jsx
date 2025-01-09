import { useContext } from "react";
import { WishListContext } from "../../Context/WishListProvider/WishListProvider";
import { CiCircleRemove } from "react-icons/ci";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { CartContext } from "../../Context/CartProvider/CartProvider";
import { CostContext } from "../../Context/CostProvider/CostProvider";


const WishlistDashboard = () => {
    const { cart, setCart } = useContext(CartContext)
    const { cost, setCost } = useContext(CostContext)
    const { wishList, setWishList } = useContext(WishListContext)

    const handleRemove = (id) => {

        const item = wishList.findIndex((p) => p.product_id === id)

        const newWishList = [...wishList]
        newWishList.splice(item, 1)
        setWishList(newWishList)

    }

    const handleAddToCart = (it) => {
        // console.log(product)
        setCost(cost+it.price)
        setCart([...cart, it])

        toast.success('Product added to Cart', {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
            transition: Bounce,
            });
    }

    return (
        <div>
            <div className="w-[90%] mx-auto">
                    <div className="flex justify-between items-center mt-6"> 
                        <h2 className="text-2xl font-bold">WishList</h2>
                    </div>
            </div>

            {
                wishList.map(it => {
                    const { product_id, product_title, product_image, price, description } = it

                    return (
                        <div className="mt-10 w-[80%] mx-auto bg-white p-5 rounded-xl flex gap-5 md:gap-10 flex-col md:flex-row items-center ">
                            <div className="w-[200px] h-[180px]">
                                <img className="w-full h-full object-cover rounded-xl" src={product_image} alt="" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold">{product_title}</h3>
                                <p className="text-base font-bold">Description: <span className="font-light text-gray-700">{description}</span></p>
                                <h4 className="text-base font-bold">Price: ${price}</h4>
                                <button onClick={()=> handleAddToCart(it)} className="px-8 py-3 rounded-3xl font-bold border-[1px]  bg-purple text-white">Add to Cart </button>
                            </div>
                            <div onClick={() => handleRemove(product_id)}
                                className="ml-auto text-red-600 text-5xl">
                                <CiCircleRemove></CiCircleRemove>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default WishlistDashboard;