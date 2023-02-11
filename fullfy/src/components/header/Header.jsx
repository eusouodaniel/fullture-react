import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MainHeader } from "./HeaderStyle";
import { goToArtist, goToAlbum, goToTrack } from '../../services/redux/page/counter';

export default function Header() {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.artist);
    console.log(store)
    return (
        <MainHeader>
            <Link to="/" onClick={() => dispatch(goToArtist())}>
                <button>Artistas</button> 
            </Link> |
            <Link to="/albuns" onClick={() => dispatch(goToAlbum())}>
                <button>Álbuns</button>
            </Link> | 
            <Link to="/musicas" onClick={() => dispatch(goToTrack())}>
                <button>Músicas</button>
            </Link>
        </MainHeader>
    )
}