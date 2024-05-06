import React, { useState, useEffect } from 'react';
import axios from "axios";
import Product from "../../components/product/Product";
import { fetchVegetableList } from '../../api/axios';

export const ProductPage = () => {
    const [products, setProducts] = useState([]);

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

    return (
        <div className="grid grid-cols-1 gap-y-16 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}            
        </div>
    );
}