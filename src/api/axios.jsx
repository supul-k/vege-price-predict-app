import axios from "axios";
const token = localStorage.getItem("token");

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3015',
    headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "application/json"
    },
});

const loginInstance =  axios.create({
    baseURL: 'http://localhost:3015',
    headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS
        "Content-Type": "application/json"
    },
});

export const loginUser = async (userData) => {
    try {
        const response = await loginInstance.post("/users/login", userData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const registerUser = async (userData) => {
    try {
        const response = await loginInstance.post("/users/", userData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const predictVegetablePrice = async (selectedDate) => {
    try {
        const response = await axiosInstance.post("/vegetables/predict-price", { selectedDate });
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