import React, { useState } from 'react';
import axios from "axios";
import { predictVegetablePrice } from "../../api/axios";
import BackgroundImage from '../../assets/images/vege.webp';

export default function HeroSection() {

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    const handleSubmit = () => {
        if (selectedDate) {
            try {
                const response = predictVegetablePrice(selectedDate);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <div className="bg-white flex items-center justify-center" style={{ height: 'calc(100vh - 4rem)' }}>
            <img
                src={BackgroundImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover filter aria-hidden mt-[4rem] sm:mt-[4rem]"
            />
            <div className="relative isolate px-6 lg:px-8 max-w-2xl">
                <div className="mx-auto max-w-2xl">
                    <div className="text-center">
                        <h1 className="font-bold tracking-tight text-green-400 sm:text-6xl text-40">
                            VEGETABLE PRICE PREDICTOR
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-green-500">
                            Empower your produce investments with the Vegetable Price Predictor. Stay ahead of market fluctuations, make informed buying and selling decisions, and cultivate profitability in the agricultural landscape.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            {!showDatePicker && !selectedDate && (
                                <a
                                    href="#"
                                    className="text-sm font-semibold leading-6 text-black-900"
                                    onClick={() => setShowDatePicker(true)}
                                >
                                    Pick a Date <span aria-hidden="true">→</span>
                                </a>
                            )}

                            {showDatePicker && (
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <div className="relative max-w-sm">
                                        <input
                                            type="date"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-2"
                                            onChange={(e) => handleDateSelect(e.target.value)}
                                        />
                                    </div>
                                    <button
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={() => handleSubmit(selectedDate)}
                                    >
                                        Predict Price
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
