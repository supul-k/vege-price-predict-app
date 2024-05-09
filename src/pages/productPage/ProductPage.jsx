import React, { useState, useEffect } from 'react';
import Product from "../../components/product/Product";
import { fetchVegetableList } from '../../api/axios';
import carrot from '../../assets/images/vege.webp';
import cabbage from '../../assets/images/cabbage.jpg';

export const ProductPage = () => {
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetchVegetableList();
                setProducts(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProducts();
    }, []);

    const products = [
        {
            "id": 1,
            "name": "Carrot",
            "imageSrc": { carrot },
            "imageAlt": "Product 1 Image",
            "href": "#",
            "color": "Red",
            "price": "$10.99"
        },
        {
            "id": 2,
            "name": "Gabbage",
            "imageSrc": { cabbage },
            "imageAlt": "Product 1 Image",
            "href": "#",
            "color": "Red",
            "price": "$10.99"
        }
    ]

    return (
        <div className="grid grid-cols-1 gap-y-16 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pl-6 pr-6">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}