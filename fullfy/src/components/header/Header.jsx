import { Link } from 'react-router-dom';
import { MainHeader } from "./HeaderStyle";

export default function Header() {
    return (
        <MainHeader>
            <Link to="/">
                <button>Artistas</button> 
            </Link> |
            <Link to="/albuns">
                <button>Álbuns</button>
            </Link> | 
            <Link to="/musicas">
                <button>Músicas</button>
            </Link>
        </MainHeader>
    )
}