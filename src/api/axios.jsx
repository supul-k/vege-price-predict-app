import axios from "axios";
const token = localStorage.getItem("token");

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
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

export const fetchVegetableList = async () => {
    try {
        const response = await axiosInstance.get("/vegetables");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}