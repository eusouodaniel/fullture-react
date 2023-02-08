import { useState, useEffect } from "react"
import { 
    getArtists, 
    getAlbums, 
    getTracks 
} from '../../services/api/lastfm';
import { MainGrid, Container } from "./CardStyle";
import { getImageByArtist } from '../../services/api/image';
import defaultImage from '../../assets/images/artist-default.jpg';

export function CardArtist() {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        getArtists(setArtists);
        
    },[])

    return (
        <MainGrid>
            {
                artists.map((artist) => {
                    //promise
                    //performance - entender
                    const images = getImageByArtist(artist.name);
                    console.log(images)
                    return (
                        <Container>
                            <img 
                                src={artist.image[4]["#text"] || defaultImage } 
                                alt={artist.image[4]["#text"] ? artist.name : "Artista sem imagem"}
                                id={artist.mbid}
                            />
                            <div className="cardInfo">
                                <h2>Nome do artista: {artist.name || "Erro no nome"}</h2>
                                <h3>Número de ouvintes mensal: {artist.name && artist.listeners ? artist.listeners : "Erro na informação"}</h3>
                                <h4><a href={artist.url || "#"} target="_blank" rel="noreferrer">Detalhes</a></h4>
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
                                src={album.image[3]["#text"] || defaultImage} 
                                alt={album.image[3]["#text"] ? album.name :  "Álbum sem imagem"}
                                id={album.mbid}
                            />
                            <h2>Nome do artista: {album.artist || "Erro no nome do artista" }</h2>
                            <h3>Nome do álbum: {album.name || "Erro no nome do álbum"}</h3>
                            <h4><a href={album.url || "#"} target="_blank" rel="noreferrer">Detalhes</a></h4>
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
                                src={track.image[3]["#text"] || defaultImage } 
                                alt={track.image[3]["#text"] ? track.name : "Música sem imagem"}
                                id={track.mbid}
                            />
                            <h2>Nome do artista: {track.artist || "Erro no nome do artista"}</h2>
                            <h3>Nome da música: {track.name || "Erro no nome da música"}</h3>
                            <h3>Número de ouvintes mensal: {track.name && track.listeners ? track.listeners : "Erro na informação"}</h3>
                            <h4><a href={track.url || "#"} target="_blank" rel="noreferrer">Detalhes</a></h4>
                        </Container>
                    );
                })
            }
        </MainGrid>
    )
}