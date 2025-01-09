import { useState } from "react";
import CartDashBoard from "./CartDashBoard";
import WishlistDashboard from "./WishlistDashboard";
import { Helmet } from "react-helmet";

const DashBoard = () => {
    const [active, setActive] = useState('cart')

    return (
        <div>
            <Helmet> 
                <title> Dashboard</title>
            </Helmet>

            <div className="bg-purple text-center text-white pb-6">
                <h3 className="pt-8 text-2xl md:text-3xl lg:text-4xl mb-4 font-bold"> Dashboard </h3>
                <p className="w-[70%] md:w-[50%] mx-auto text-sm md:text-base font-light">Explore the latest gadgets that will take your experience to the next level.
                    From smart devices to the coolest accessories, we have it all!</p>

                <div className="flex gap-5 justify-center my-6">
                    <button onClick={() => setActive('cart')}
                        className={`px-8 py-3 rounded-3xl font-bold border-[1px] border-white ${active==='cart' ? "bg-white text-purple" : "bg-purple"}`}>
                        Cart </button>
                    <button onClick={() => setActive('wishlist')}
                        className={`px-8 py-3 rounded-3xl font-bold border-[1px] border-white ${active==='wishlist' ? "bg-white text-purple" : "bg-purple"}`}> 
                        Wishlist </button>
                </div>
            </div>

            {active==='cart' &&
                <CartDashBoard></CartDashBoard>
            }

            {active==='wishlist' &&
                <WishlistDashboard></WishlistDashboard>
            }




        </div>
    );
};

export default DashBoard;