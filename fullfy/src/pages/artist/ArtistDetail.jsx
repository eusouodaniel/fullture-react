import { useParams } from 'react-router-dom';
import { MainArtist, DivMargin } from './ArtistStyle';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer'

export default function ArtistDetail() {
    const { artistName } = useParams();
    console.log(artistName)
    return (
        <MainArtist>
            <Header />
            <DivMargin />
            <h1>Detalhe do artista</h1>
            <Footer />
        </MainArtist>
    )
}