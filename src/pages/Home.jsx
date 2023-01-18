import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import InputText from "../components/Input";
import { Link } from "react-router-dom";
import { buscaCep } from "../api/cep.js";

export default function Home() {
    return (
        <div>
            <Header firstItem="Item 1" secondItem="Item 2"/>
            <h1>Olá mundo - Home</h1>

            <InputText type="text" inputName="cep" placeholder="Digite seu cep" id="cep" />
            <button onClick={buscaCep}>Buscar cep</button> <br /><br /><br />
            <Link to="/contato">
                <Button text="Contato" />
            </Link>
            {/* <InputText type="text" inputName="name" placeholder="Digite seu nome" />
            <InputText type="text" inputName="surname" placeholder="Digite seu sobrenome" />
            <InputText type="email" inputName="email" />
            <InputText type="password" inputName="password" /> */}
            <Footer value="Footer da Home" text="texto da Home"/>
        </div>
    )
}