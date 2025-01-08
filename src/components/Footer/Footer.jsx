const Footer = () => {
    return (
        <div className="bg-white">
            <div className="w-[60%] mx-auto text-black mt-10 py-6 md:py-10 ">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2"> Gadget Heaven </h2>
                <p className="opacity-70 text-center"> Leading the way in cutting-edge technology and innovation. </p>
               
               <div className="border-t-2 mt-6"></div>
               
                <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between pt-8">
                    <div className="text-center space-y-2">
                        <h5 className="text-lg font-bold"> Services </h5>
                        <ul className=" space-y-1 opacity-60">
                            <li> <a href=""> Product Support </a> </li>
                            <li> <a href=""> Order Tracking </a> </li>
                            <li><a href=""></a> Shipping & Delivery </li>
                            <li><a href=""></a> Returns </li>
                        </ul>
                    </div>
                    <div className="text-center space-y-2">
                        <h5 className="text-lg  font-bold"> Company </h5>
                        <ul className="space-y-1 opacity-60">
                            <li><a href=""> About Us </a></li>
                            <li><a href=""> Careers </a></li>
                            <li><a href=""> Contact </a></li>
                        </ul>
                    </div>
                    <div className="space-y-2 text-center ">
                        <h5 className="text-lg font-bold"> Legal </h5>
                        <ul className="space-y-1 opacity-60">
                            <li><a href=""> Terms of Service </a></li>
                            <li><a href=""> Privacy Policy </a></li>
                            <li><a href=""> Cookie Policy </a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;