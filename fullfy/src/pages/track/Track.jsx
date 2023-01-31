import { useState, useEffect  } from "react";
import { getTracks } from "../../services/api/lastfm";
export default function Track() {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        getTracks(setTracks);
    }, []);

    return (
        <div>
            <h1>Track</h1>
            {
                tracks.map((track) => {
                    return (
                        <div>
                            <img src={track.image[3]["#text"]} />
                            <h2>Nome do artista: {track.artist}</h2>
                            <h3>Nome da música: {track.name}</h3>
                            <h3>Número de ouvintes mensal: {track.listeners}</h3>
                            <h4><a href={track.url} target="_blank" rel="noreferrer">Detalhes</a></h4>
                        </div>
                    );
                })
            }
        </div>
    )
}