import axios from 'axios';

const BASE_URL = "https://api.thecatapi.com/v1";
const API_KEY = "live_vNi9f5CHEtVmcQXSX5iHftrgVYYqrf8h0FryLr44mW7aVGOGgBOMcYMpYfZXmqRR";

export const getCats = (setCats) => {
    axios.get(`${BASE_URL}/images/search?limit=20`, {
        headers: {
            'x-api-key' : API_KEY
        }
    }).then((response) => {
        console.log(response.data)
        setCats(response.data);
    }).catch((error) => {
        console.error(error);
    })
}

export const getCatByBreed = (setCat, breedId) => {
    axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}&limit=8`, {
        headers: {
            'x-api-key' : API_KEY
        }
    }).then((response) => {
        console.log(response.data);
        setCat(response.data);
    }).catch((error) => {
        console.error(error);
    })
}