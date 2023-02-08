import axios from 'axios';

const BASE_URL = "https://api.unsplash.com"
const API_KEY = "H8unfM2ruxNy0Fi0XoTCfImhB1WNVdPpSNYSlVERtDc"

export async function getImageByArtist(artist) {
    return await axios.get(`${BASE_URL}/search/photos?query=${artist}&client_id=${API_KEY}`)
            .then(response => {
                return response.data
            })
}