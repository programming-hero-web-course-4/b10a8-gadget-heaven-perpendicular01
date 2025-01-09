import React, { createContext, useState } from 'react';

export const WishListContext = createContext()

const WishListProvider = ({children}) => {
    const [wishList, setWishList] = useState([])

    return (
        <div>

            <WishListContext.Provider value={{wishList, setWishList}} > {children} </WishListContext.Provider>
            
        </div>
    );
};

export default WishListProvider;