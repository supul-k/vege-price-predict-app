import React, { useState, useEffect } from 'react';
import Product from "../../components/product/Product";
import carrot from '../../assets/images/vegetables/carrot.jpg';
import cabbage from '../../assets/images/vegetables/cabbage.jpg';
import tomatoes from '../../assets/images/vegetables/Tomatoes.webp';
import avacado from '../../assets/images/vegetables/avacado.jpg';
import banana from '../../assets/images/vegetables/banana.webp';
import beans from '../../assets/images/vegetables/beans.webp';
import beetroot from '../../assets/images/vegetables/Beetroot.webp';
import bittergourd from '../../assets/images/vegetables/bittergourd.webp';
import brinjal from '../../assets/images/vegetables/brinjals.jpg';
import cucumber from '../../assets/images/vegetables/cucumber.webp';
import greenchilli from '../../assets/images/vegetables/greenchillies.webp';
import knolkhol from '../../assets/images/vegetables/knolkhol.webp';
import ladyfinger from '../../assets/images/vegetables/ladyfingers.webp';
import leeks from '../../assets/images/vegetables/leeks.png';
import limes from '../../assets/images/vegetables/limes.webp';
import mango from '../../assets/images/vegetables/mango.jpg';
import papaya from '../../assets/images/vegetables/papaya.jpg';
import pineapple from '../../assets/images/vegetables/pineapple.webp';
import potato from '../../assets/images/vegetables/potato.webp';
import pumpkin from '../../assets/images/vegetables/pumpkin.webp';

const imageMapping = {
    "Carrot": { imageSrc: carrot, imageAlt: "Carrot Image" },
    "Cabbage": { imageSrc: cabbage, imageAlt: "Cabbage Image" },
    "Tomatoes": { imageSrc: tomatoes, imageAlt: "Tomatoes Image" },
    "Avacado": { imageSrc: avacado, imageAlt: "Avacado Image" },
    "Banana": { imageSrc: banana, imageAlt: "Banana Image" },
    "Beans": { imageSrc: beans, imageAlt: "Beans Image" },
    "Beetroot": { imageSrc: beetroot, imageAlt: "Beetroot Image" },
    "Bittergourd": { imageSrc: bittergourd, imageAlt: "Bittergourd Image" },
    "Brinjal": { imageSrc: brinjal, imageAlt: "Brinjal Image" },
    "Cucumber": { imageSrc: cucumber, imageAlt: "Cucumber Image" },
    "Greenchilli": { imageSrc: greenchilli, imageAlt: "Greenchilli Image" },
    "Knolkhol": { imageSrc: knolkhol, imageAlt: "Knolkhol Image" },
    "Ladyfinger": { imageSrc: ladyfinger, imageAlt: "Ladyfinger Image" },
    "Leeks": { imageSrc: leeks, imageAlt: "Leeks Image" },
    "Limes": { imageSrc: limes, imageAlt: "Limes Image" },
    "Mango": { imageSrc: mango, imageAlt: "Mango Image" },
    "Papaya": { imageSrc: papaya, imageAlt: "Papaya Image" },
    "Pineapple": { imageSrc: pineapple, imageAlt: "Pineapple Image" },
    "Potato": { imageSrc: potato, imageAlt: "Potato Image" },
    "Pumpkin": { imageSrc: pumpkin, imageAlt: "Pumpkin Image" },
};

export const ProductPage = ({ products }) => {

    // console.log('product', products);

    // const enhancedProducts = Object.entries(products).map(([name, prices], index) => {
    //     const { imageSrc, imageAlt } = imageMapping[name] || {};
    //     return {
    //         id: index + 1,
    //         name,
    //         imageSrc,
    //         imageAlt,
    //         todayPrice: `$${prices[0]}`,
    //         tomorrowPrice: `$${prices[1]}`,
    //         nextWeekPrice: `$${prices[2]}`
    //     };
    // });

    // console.log('enhancedProducts', enhancedProducts);

    const productss = [
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
            {productss.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}