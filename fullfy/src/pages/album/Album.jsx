import { MainAlbum } from "./AlbumStyle";
import { CardAlbum } from '../../components/card/Card';
import Footer from '../../components/footer/Footer'

export default function Album() {
    return (
        <MainAlbum>
            <CardAlbum />
            <Footer />
        </MainAlbum>
    )
}