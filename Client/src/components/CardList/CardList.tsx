import React, { useContext } from "react";
import Card from "../Card/Card";
import { SearchDataContext } from "../../context/contextProducts";
import './CardList.scss'
import BreadCrumbs from "../Breadcrumps/Breadcrumps";

interface Product {
    id: string;
    title: string;
    price: {
        currency: string;
        amount: number;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
    city: string;
    categories:string
}

const CardList: React.FC = () => {
    const { searchData } = useContext(SearchDataContext);

    return (
        <>
            <BreadCrumbs categoriesByProduct={searchData.categories}></BreadCrumbs>
            <div className="container-card-list">
                {searchData.items?.map((product: Product) => (
                    <Card
                        key={product.id}
                        id={product.id}
                        imageSrc={product.picture}
                        price={product.price.amount}
                        title={product.title}
                        city={product.city}
                    />
                ))}
            </div>
        </>

    );
};

export default CardList;
