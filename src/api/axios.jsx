import axios from "axios";
const token = localStorage.getItem("token");

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "application/json"
    },
});

export const predictVegetablePrice = async (selectedDate) => {
    try {
        const response = await axiosInstance.post("/predict-price", { selectedDate });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}