import { 
    MainAlbum, 
    DivMargin, 
    ShowAlbum 
} from "./AlbumStyle";
import { CardAlbum } from '../../components/card/Card';
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function Album() {
    return (
        <MainAlbum>
            <Header />
            <DivMargin />
            <ShowAlbum>
                <p>Álbuns</p>
            </ShowAlbum>
            <div className='card'>
                <CardAlbum />
            </div>
            <Footer />
        </MainAlbum>
    )
}