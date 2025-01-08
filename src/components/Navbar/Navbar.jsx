import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
    const location = useLocation()
    const HomePage = location.pathname === '/'

    const links = <>
        <li className="hover:font-bold"> <NavLink to='/'> Home </NavLink> </li>
        <li className="hover:font-bold"> <NavLink to="statistics"> Statistics </NavLink></li>
        <li className="hover:font-bold"> <NavLink to="dashboard"> Dashboard </NavLink></li>
    </>

    return (
        <div className={`${HomePage ? "my-6" : "bg-white"}`}>
            <div className={`w-[90%] mx-auto flex justify-between items-center px-10 py-4 rounded-t-xl ${HomePage ? "bg-purple text-white" : ""}`}>
                <h2 className="text-xl font-bold ">Gadget Heaven</h2>
                <div className="hidden list-none md:flex gap-10">
                    {links}
                </div>

                <div className="flex items-center  gap-5 ">
                    <div className="h-10 w-10 border-[1px] rounded-full flex justify-center items-center bg-white border-gray-300 text-xl text-black"> <AiOutlineShoppingCart></AiOutlineShoppingCart></div>
                    <div className="h-10 w-10 border-[1px] rounded-full flex justify-center items-center bg-white border-gray-300 text-xl text-black"> <AiOutlineHeart> </AiOutlineHeart></div>
                    <div className="md:hidden">
                        <div class="dropdown dropdown-end">
                            <div tabindex="0" role="button" class="text-3xl m-1"><IoIosMenu></IoIosMenu></div>
                            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;