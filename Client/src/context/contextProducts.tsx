import React, { createContext, useState,  } from 'react';


export const SearchDataContext = createContext<any>([]);

export const SearchDataProvider: React.FC<{children: React.ReactNode}> = ({ children  }) => {
    const [searchData, setSearchData] = useState<any>([]);

    return (
        <SearchDataContext.Provider value={{ searchData, setSearchData }}>
            {children}
        </SearchDataContext.Provider>
    );
};
