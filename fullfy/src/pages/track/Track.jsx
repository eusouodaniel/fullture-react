import { MainTrack } from "./TrackStyle";
import { CardTrack } from '../../components/card/Card';
import Footer from "../../components/footer/Footer";

export default function Track() {
    return (
        <MainTrack>
            <CardTrack />
            <Footer />
        </MainTrack>
    )
}