import axios from "axios";

export const BASE_URL = 'https://youtube-v311.p.rapidapi.com'

const options = {
    params: {
        maxResults: '48',
    },
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
        'x-rapidapi-host': 'youtube-v311.p.rapidapi.com'
    }
};

export const fetchFromAPI = async(url, config = {}) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, {
        ...options,
        ...config,
        params: {
            ...options.params,
            ...config.params,
        },
    });
    return data;
}
