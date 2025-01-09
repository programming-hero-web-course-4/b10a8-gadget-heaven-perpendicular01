import { key } from "localforage"

const Catagories = ({handleCategories, selectedCategory}) => {
    const categories = ['All Products', 'Laptops', 'Phones', 'Accessories', 'Earphones', 'Watches']
    
    return (
        <div>

            <div className="bg-white p-5 mx-5 md:mx-10 rounded-xl grid grid-cols-2 md:grid-cols-1 gap-x-5 mb-5">
                {
                    categories.map((category, index) => {
                        return <button  
                        onClick={() => handleCategories(category)}
                        key={index}
                        className={`px-3 py-2 border-[1px] rounded-3xl my-3 ${
                            selectedCategory===category ? 'bg-purple text-white' 
                            : ''
                        }`}
                    >
                        {category}</button>
                    })
                }
            </div>
            
        </div>
    );
};

export default Catagories;