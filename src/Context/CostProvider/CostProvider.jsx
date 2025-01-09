import React, { createContext, useState } from 'react';

export const CostContext = createContext();

const CostProvider = ({children}) => {
    const [cost, setCost] = useState(0.00)

    return (
        <div>
            <CostContext.Provider value={{cost, setCost}}> {children} </CostContext.Provider>
            
        </div>
    );
};

export default CostProvider;