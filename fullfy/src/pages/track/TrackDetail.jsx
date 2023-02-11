import { useSelector } from "react-redux";
import { MainTrack, DivMargin } from "./TrackStyle";
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
// import { useParams } from "react-router-dom";

export default function TrackDetail() {
    const store = useSelector((state) => state.track);
    // const { musicName, albumName } = useParams();
    // console.log(musicName);
    // console.log(albumName);
    return (
        <MainTrack>
            <Header />
            <DivMargin />
            <h1>{store.value.name}</h1>
            <h2>{store.value.artist}</h2>
            <h3>{store.value.url}</h3>
            <h4>Detalhe da música</h4>
            <Footer />
        </MainTrack>
    )
}