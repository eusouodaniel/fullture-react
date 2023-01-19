import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import InputText from "../components/Input";
import { buscaCep } from "../api/cep.js";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [rua, setRua] = useState([]);
    const [bairro, setBairro] = useState([]);

    const handleClick = () => {
        let cep = document.getElementById("cep").value;
        buscaCep(cep, setRua, setBairro);
    }

    return (
        <div>
            <Header firstItem="Item 1" secondItem="Item 2"/>
            <h1>Olá mundo - Home</h1>
            <InputText type="text" inputName="cep" placeholder="Digite seu cep" id="cep" />
            <button onClick={handleClick}>Buscar cep</button><br/><br/>
            <InputText type="text" inputName="bairro" placeholder="Rua" value={rua} />
            <InputText type="text" inputName="bairro" placeholder="Bairro" value={bairro} />
            <br /><br /><br />
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