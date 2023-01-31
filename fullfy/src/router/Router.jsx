import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artist from '../pages/artist/Artist';
import Album from '../pages/album/Album';
import Track from '../pages/track/Track';
import NotFound from '../pages/errors/404';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Artist />}></Route>
                <Route path="/albuns" element={<Album />}></Route>
                <Route path="/musicas" element={<Track />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}