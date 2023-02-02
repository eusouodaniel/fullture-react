import { MainTrack, DivMargin } from "./TrackStyle";
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { useParams } from "react-router-dom";

export default function TrackDetail() {
    const { artistName, albumName } = useParams();
    console.log(artistName);
    console.log(albumName);
    return (
        <MainTrack>
            <Header />
            <DivMargin />
            <h1>Detalhe da música</h1>
            <Footer />
        </MainTrack>
    )
}