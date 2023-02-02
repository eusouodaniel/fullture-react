import { 
    MainTrack, 
    DivMargin, 
    ShowTrack 
} from "./TrackStyle";
import { CardTrack } from '../../components/card/Card';
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";

export default function Track() {
    return (
        <MainTrack>
            <Header />
            <DivMargin />
            <ShowTrack>
                <p>Músicas</p>
            </ShowTrack>
            <div className='card'>
                <CardTrack />
            </div>
            <Footer />
        </MainTrack>
    )
}