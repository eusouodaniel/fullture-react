import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
    getArtists, 
    getAlbums, 
    getTracks 
} from '../../services/api/lastfm';
import { MainGrid, Container } from "./CardStyle";
import Image from '../elements/image/Image';
import defaultImage from '../../assets/images/artist-default.jpg';
import { goToArtistDetail } from '../../services/redux/artist/artist';
import { goToAlbumDetail } from "../../services/redux/album/album";
import { goToTrackDetail } from "../../services/redux/track/track";

export function CardArtist() {
    const [artists, setArtists] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        getArtists(setArtists);
    },[])

    return (
        <MainGrid>
            {
                artists.map((artist) => {
                    const artistName = artist.name.replaceAll(" ", "-").toLowerCase();
                    return (
                        <Container>
                            <Link to={`/artista/${artistName}`} onClick={() => dispatch(goToArtistDetail({
                                                                                            name: artist.name,
                                                                                            listeners: artist.listeners,
                                                                                            url: artist.url
                                                                                        }))}>
                                <Image artist={artist.name} />
                                <div className="cardInfo">
                                    <h2>Nome do artista: {artist.name || "Erro no nome"}</h2>
                                    <h3>Número de ouvintes mensal: {artist.name && artist.listeners ? artist.listeners : "Erro na informação"}</h3>
                                    <h4><a href={artist.url || "#"} target="_blank" rel="noreferrer">Detalhes</a></h4>
                                </div>
                            </Link>
                        </Container>
                    )        
                })
            }
        </MainGrid>
    )
}

export function CardAlbum() {

    const [albums, setAlbums] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        getAlbums(setAlbums);
    }, [])

    return (
        <MainGrid>
            {
                albums.map((album) => {
                    const albumName = album.name.replaceAll(" ", "-").toLowerCase();
                    return (
                        <Container>
                            <Link to={`/album/${albumName}`} onClick={() => dispatch(goToAlbumDetail({
                                                                                            name: album.name,
                                                                                            artist: album.artist,
                                                                                            url: album.url
                                                                                        }))}>
                                <img 
                                    src={album.image[3]["#text"] || defaultImage} 
                                    alt={album.image[3]["#text"] ? album.name :  "Álbum sem imagem"}
                                    id={album.mbid}
                                />
                                <h2>Nome do artista: {album.artist || "Erro no nome do artista" }</h2>
                                <h3>Nome do álbum: {album.name || "Erro no nome do álbum"}</h3>
                                <h4><a href={album.url || "#"} target="_blank" rel="noreferrer">Detalhes</a></h4>
                            </Link>
                        </Container>
                    )
                })
            }
        </MainGrid>
    )
}

export function CardTrack() {
    const [tracks, setTracks] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        getTracks(setTracks);
    }, []);

    return (
        <MainGrid>
            {
                tracks.map((track) => {
                    const trackName = track.name.replaceAll(" ", "-").toLowerCase();
                    return (
                        <Container>
                                <Link to={`/musica/${trackName}`} onClick={() => dispatch(goToTrackDetail({
                                                                                                name: track.name,
                                                                                                artist: track.artist,
                                                                                                url: track.url
                                                                                            }))}>
                                <Image artist={track.artist} />
                                <h2>Nome do artista: {track.artist || "Erro no nome do artista"}</h2>
                                <h3>Nome da música: {track.name || "Erro no nome da música"}</h3>
                                <h3>Número de ouvintes mensal: {track.name && track.listeners ? track.listeners : "Erro na informação"}</h3>
                                <h4><a href={track.url || "#"} target="_blank" rel="noreferrer">Detalhes</a></h4>
                            </Link>
                        </Container>
                    );
                })
            }
        </MainGrid>
    )
}