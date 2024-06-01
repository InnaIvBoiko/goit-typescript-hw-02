import axios from "axios";

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchImages = async<T>(searchQuery: string, currentPage: number): Promise<T> => {
    try {
        const response = await axios.get("/search/photos", {
        params: {
            client_id: 'qluovK25gLf-UPHUEn1Xwn8cmv8tGJ1oK1oCSsWqq5k',
            query: searchQuery,
            per_page: 12,
            page: currentPage,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};   