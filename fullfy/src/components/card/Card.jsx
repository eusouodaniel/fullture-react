import { useState, useEffect } from "react"
import { 
    getArtists, 
    getAlbums, 
    getTracks 
} from '../../services/api/lastfm';
import { MainGrid, Container } from "./CardStyle";

export function CardArtist() {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        getArtists(setArtists);
    },[])

    return (
        <MainGrid>
            {
                artists.map((artist) => {
                    return (
                        <Container>
                            <img 
                                src={artist.image[4]["#text"]} 
                                alt={artist.name}
                                id={artist.mbid}
                            />
                            <div className="cardInfo">
                                <h2>Nome do artista: {artist.name}</h2>
                                <h3>Número de ouvintes mensal: {artist.listeners}</h3>
                                <h4><a href={artist.url} target="_blank" rel="noreferrer">Detalhes</a></h4>
                            </div>
                        </Container>
                    )        
                })
            }
        </MainGrid>
    )
}

export function CardAlbum() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAlbums(setAlbums);
    }, [])

    return (
        <MainGrid>
            {
                albums.map((album) => {
                    return (
                        <Container>
                            <img 
                                src={album.image[3]["#text"]} 
                                alt={album.name}
                                id={album.mbid}
                            />
                            <h2>Nome do artista: {album.artist}</h2>
                            <h3>Nome do álbum: {album.name}</h3>
                            <h4><a href={album.url} target="_blank" rel="noreferrer">Detalhes</a></h4>
                        </Container>
                    )
                })
            }
        </MainGrid>
    )
}

export function CardTrack() {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        getTracks(setTracks);
    }, []);

    return (
        <MainGrid>
            {
                tracks.map((track) => {
                    return (
                        <Container>
                            <img 
                                src={track.image[3]["#text"]} 
                                alt={track.name}
                                id={track.mbid}
                            />
                            <h2>Nome do artista: {track.artist}</h2>
                            <h3>Nome da música: {track.name}</h3>
                            <h3>Número de ouvintes mensal: {track.listeners}</h3>
                            <h4><a href={track.url} target="_blank" rel="noreferrer">Detalhes</a></h4>
                        </Container>
                    );
                })
            }
        </MainGrid>
    )
}