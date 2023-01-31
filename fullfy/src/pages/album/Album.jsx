import { useState, useEffect } from "react";
import { getAlbums } from "../../services/api/lastfm";

export default function Album() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAlbums(setAlbums);
    }, [])
    return (
        <div>
            <h1>Album</h1>
            {
                albums.map((album) => {
                    return (
                        <div>
                            <img src={album.image[3]["#text"]} />
                            <h2>Nome do artista: {album.artist}</h2>
                            <h3>Nome do álbum: {album.name}</h3>
                            <h4><a href={album.url} target="_blank" rel="noreferrer">Detalhes</a></h4>
                        </div>
                    )
                })
            }
        </div>
    )
}