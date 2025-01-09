import { Link } from "react-router-dom";
import banner from '../../assets/banner.jpg'

const HomeBanner = () => {
    return (
        <div>
            <div className="bg-purple w-[90%] mx-auto text-center">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl max-w-[75%]  mx-auto font-bold pt-5 md:pt-7 pb-6 text-center">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                <p className="text-white text-sm  text-center max-w-[50%]  mx-auto  pb-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <Link to="dashboard"> <button className="bg-white border px-3 py-2 mt-3 mb-24 md:mb-44 lg:mb-48 font-bold rounded-xl text-purple"> Shop now </button> </Link>
            </div>


            <div className="h-[200px] md:h-[300px] lg:h-[500px] w-[70%] md:w-[60%] mx-auto p-2 md:p-3 bg-white bg-opacity-15 border-gray-400 border-[1px] rounded-xl
             -mt-20 md:-mt-36 lg:-mt-40 mb-8 md:mb-12 lg:mb-16">
                <img className="w-full h-full object-cover rounded-xl self-center" src={banner} alt="" />
            </div>

        </div>
    );
};

export default HomeBanner;