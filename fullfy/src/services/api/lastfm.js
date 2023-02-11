import axios from 'axios';
const BASE_URL = "https://ws.audioscrobbler.com"
const API_KEY = "e2f4b9958fbd2623d999049070506127"
const FORMAT = "json"

export function getArtists(setArtists) {
    axios.get(`${BASE_URL}/2.0/?method=artist.search&artist=brown
                &api_key=${API_KEY}&format=${FORMAT}&page=1`)
            .then(async (response) => {
                console.log(response.data.results.artistmatches.artist)
                setArtists(response.data.results.artistmatches.artist)
            })
}

export function getAlbums(setAlbums) {
    axios.get(`${BASE_URL}/2.0/?method=album.search&album=believe
                &api_key=${API_KEY}&format=${FORMAT}&page=1`)
            .then(response => {
                console.log(response.data.results.albummatches.album)
                setAlbums(response.data.results.albummatches.album)
            })
}

export function getTracks(setTracks) {
    axios.get(`${BASE_URL}/2.0/?method=track.search&track=Believe
                &api_key=${API_KEY}&format=${FORMAT}&page=1`)
            .then(response => {
                console.log(response.data.results.trackmatches.track);
                setTracks(response.data.results.trackmatches.track)
            })
}