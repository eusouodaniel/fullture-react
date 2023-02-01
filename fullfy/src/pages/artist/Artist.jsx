import { MainArtist } from './ArtistStyle';
import { CardArtist } from '../../components/card/Card';
import Footer from '../../components/footer/Footer'

export default function Artist() {
    return (
        <MainArtist>
            <CardArtist />
            <Footer />
        </MainArtist>
    )
}