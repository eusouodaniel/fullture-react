import axios from 'axios';

const BASE_URL = "https://api.unsplash.com"
const API_KEY = "H8unfM2ruxNy0Fi0XoTCfImhB1WNVdPpSNYSlVERtDc"

export function getImageByArtist(setImage, artist) {
    axios.get(`${BASE_URL}/search/photos?query=${artist}&client_id=${API_KEY}`)
            .then(response => {
                setImage(response.data.results[0].urls.full)
            })
}