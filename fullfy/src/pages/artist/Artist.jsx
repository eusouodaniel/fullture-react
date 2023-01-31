import { useState, useEffect } from "react"
import { getArtists } from '../../services/api/lastfm';

export default function Artist() {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        getArtists(setArtists);
    },[])

    return (
        <div>
            {
                artists.map((artist) => {
                    return (
                        <div>
                            <img src={artist.image[4]["#text"]} />
                            <h2>Nome do artista: {artist.name}</h2>
                            <h3>Número de ouvintes mensal: {artist.listeners}</h3>
                            <h4><a href={artist.url} target="_blank" rel="noreferrer">Detalhes</a></h4>
                        </div>
                    )        
                })
            }
        </div>
    )
}