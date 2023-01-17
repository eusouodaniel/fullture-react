import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Header firstItem="Item 1" secondItem="Item 2"/>
            <h1>Olá mundo - Home</h1>
            <Footer value="Footer da Home" text="texto da Home"/>
        </div>
    )
}