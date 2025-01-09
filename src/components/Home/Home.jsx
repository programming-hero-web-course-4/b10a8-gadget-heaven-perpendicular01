import { useState } from "react";
import HomeBanner from "../Banner/HomeBanner";
import Catagories from "../Catagories/Catagories";
import Products from "../Products/Products";

const Home = () => {
    const [selectedCategory, setSeletctdCategoty] = useState("All Products")

    const handleCategories = (category) => {
        setSeletctdCategoty(category)
        
    }
    // console.log(selectedCategory)

    return (
        <div>
            <HomeBanner></HomeBanner>

            <div className="font-bold text-center text-3xl md:text-4xl mb-16">Explore Cutting-Edge Gadgets</div>
            
            <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between">
                
                <div className="w-full md:w-1/3 lg:w-1/5">
                    <Catagories handleCategories={handleCategories} selectedCategory={selectedCategory}></Catagories>
                </div>
                
                <div className="w-full md:w-2/3 lg:w-4/5">
                     <Products selectedCategory={selectedCategory}></Products>
                </div>
            
            </div>
        </div>
    );
};

export default Home;