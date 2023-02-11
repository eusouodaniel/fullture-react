// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MainArtist, DivMargin } from './ArtistStyle';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer'
import Image from '../../components/elements/image/Image';
// import { goToArtistDetail } from '../../services/redux/artist';

export default function ArtistDetail() {
    
    // useEffect(() => {
    //     goToArtistDetail({
    //         name: "teste",
    //         listeners: 0,
    //         url: "#"
    //     });
    // },[])

    const store = useSelector((state) => state.artist);

    return (
        <MainArtist>
            <Header />
            <DivMargin />
            <Image artist={store.value.name} />
            <h1>{store.value.name}</h1>
            <h2>{store.value.listeners}</h2>
            <h3>{store.value.url}</h3>
            <h4>Detalhe do artista</h4>
            <Footer />
        </MainArtist>
    )
}