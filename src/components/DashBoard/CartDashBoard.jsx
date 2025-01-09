import { useContext } from "react";
import { CartContext } from "../../Context/CartProvider/CartProvider";
import { CostContext } from "../../Context/CostProvider/CostProvider";
import { CiCircleRemove } from "react-icons/ci";
import { RiPriceTag2Fill } from "react-icons/ri";
import { BsSortDown } from "react-icons/bs";
import group from "../../assets/Group.png"
import { Link } from "react-router-dom";

const CartDashBoard = () => {

    const { cart, setCart } = useContext(CartContext)
    const { cost, setCost } = useContext(CostContext)

    const handleRemove = (id, price) => {

        const item = cart.findIndex((p) => p.product_id === id)

        const newCart = [...cart]
        newCart.splice(item, 1)
        setCart(newCart)

        setCost(cost - price)


    }

    const handleSorting = () => {
        const newCart = [...cart.sort((a, b) => b.price - a.price)]

        setCart(newCart)
    }

    const handlePurchase = () => {
        setCart([])
    }


    return (
        <div>

            <div className="w-[90%] mx-auto">
                <div className="flex justify-between items-center mt-6">
                    <div> <h2 className="text-2xl font-bold">Cart</h2></div>
                    <div className="flex justify-center items-center gap-3">
                        <h2 className="text-xl font-bold">Total Cost: ${cost}</h2>
                        <button onClick={handleSorting} className="text-base  rounded-full flex justify-center items-center gap-2 px-3 py-2 bg-white text-purple font-semibold border-[1px] border-purple"> Sort by Price <BsSortDown className="text-xl font-semibold "></BsSortDown></button>
                        <button onClick={() => {
                            document.getElementById('my_modal_5').showModal();
                            handlePurchase();
                        }} className="text-base  rounded-full flex justify-center items-center gap-2 px-3 py-2 bg-purple text-white font-semibold"> Purchase</button>
                        
                        <dialog id="my_modal_5" className="modal modal-middle max-w-[420px] mx-auto">
                            <div className="modal-box text-center">
                                <img className="w-10 h-10 mx-auto my-2" src={group} alt="" />
                                <h3 className="font-bold text-lg">Payment Successfully </h3>
                                <div className="my-3 border-t-[1px] border-gray-300"></div>
                                <p className="text-base text-gray-700 font-light">Thanks for Purchasing </p>
                                <p className="text-base text-gray-700 font-light"> Total : ${cost} </p>
                                <div className="modal-action flex justify-center items-center">
                                    <form method="dialog ">
                                        {/* if there is a button in form, it will close the modal */}
                                        <Link to="/"> <button onClick={()=> setCost(0)} className="btn px-32 mx-auto">Close</button> </Link>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                    </div>


                </div>

            </div>


            {
                cart.map(it => {
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
                                
                            </div>
                            <div onClick={() => handleRemove(product_id, price)}
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

export default CartDashBoard;