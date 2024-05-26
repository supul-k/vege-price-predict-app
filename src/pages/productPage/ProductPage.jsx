import React, { useState, useEffect } from 'react';
import Product from "../../components/product/Product";
import { fetchVegetableList } from '../../api/axios';
import carrot from '../../assets/images/carrot.jpg';
import cabbage from '../../assets/images/cabbage.jpg';
import tomatoes from '../../assets/images/Tomatoes.webp';

export const ProductPage = ({product}) => {

    const products = [
        {
            "id": 1,
            "name": "Carrot",
            "imageSrc": carrot ,
            "imageAlt": "Carrot Image",
            "todayPrice": "$10.99",
            "tomorrowPrice": "$10.99",
            "nextWeekPrice": "$10.99",
        },
        {
            "id": 2,
            "name": "Cabbage",
            "imageSrc": cabbage ,
            "imageAlt": "cabbage Image",
            "todayPrice": "$10.99",
            "tomorrowPrice": "$10.99",
            "nextWeekPrice": "$10.99",
        },
        {
            "id": 3,
            "name": "Tomatoes",
            "imageSrc": tomatoes ,
            "imageAlt": "Tomatoes Image",
            "todayPrice": "$10.99",
            "tomorrowPrice": "$10.99",
            "nextWeekPrice": "$10.99",
        },
    ]

    return (
        <div className="grid grid-cols-1 gap-y-16 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pl-6 pr-6">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}