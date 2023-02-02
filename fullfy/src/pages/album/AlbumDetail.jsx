import { MainAlbum, DivMargin } from "./AlbumStyle";
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { useParams } from "react-router-dom";

export default function AlbumDetail() {
    const { artistName } = useParams();
    console.log(artistName)
    return (
        <MainAlbum>
            <Header />
            <DivMargin />
            <h1>Detalhe do álbum</h1>
            <Footer />
        </MainAlbum>
    )
}