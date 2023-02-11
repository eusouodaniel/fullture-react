import { useSelector } from 'react-redux';
import { MainAlbum, DivMargin } from "./AlbumStyle";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function AlbumDetail() {

    const store = useSelector((state) => state.album);
    
    return (
        <MainAlbum>
            <Header />
            <DivMargin />
            <h1>{store.value.name}</h1>
            <h2>{store.value.artist}</h2>
            <h3>{store.value.url}</h3>
            <h4>Detalhe do álbum</h4>
            <Footer />
        </MainAlbum>
    )
}