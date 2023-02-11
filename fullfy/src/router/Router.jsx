import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artist from '../pages/artist/Artist';
import ArtistDetail from '../pages/artist/ArtistDetail'
import Album from '../pages/album/Album';
import AlbumDetail from '../pages/album/AlbumDetail';
import Track from '../pages/track/Track';
import TrackDetail from '../pages/track/TrackDetail';
import NotFound from '../pages/errors/404';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Artist />}></Route>
                <Route path="/artista/:artistName" element={<ArtistDetail />}></Route>

                <Route path="/albuns" element={<Album />}></Route>
                <Route path="/album/:artistName" element={<AlbumDetail />}></Route>

                <Route path="/musicas" element={<Track />}></Route>
                <Route path="/musica/:musicName" element={<TrackDetail />}></Route>
                <Route path="/musica/:musicName/:albumName" element={<TrackDetail />}></Route>
                
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}