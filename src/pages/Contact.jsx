import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div>
            <Header firstItem="Item 1" secondItem="Item 2"/>
            <h1>Olá mundo - contato</h1>
            <Link to="/">
                <Button text="Home" />
            </Link>
            <Footer value="Footer do contato" text="texto da Home"/>
        </div>
    )
}