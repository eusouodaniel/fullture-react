import { 
    MainArtist, 
    DivMargin, 
    ShowArtist 
} from './ArtistStyle';
import { CardArtist } from '../../components/card/Card';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer'

export default function Artist() {
    return (
        <MainArtist>
            <Header />
            <DivMargin />
            <ShowArtist>
                <p>Artistas</p>
            </ShowArtist>
            <div className='card'>
                <CardArtist />
            </div>
            <Footer />
        </MainArtist>
    )
}