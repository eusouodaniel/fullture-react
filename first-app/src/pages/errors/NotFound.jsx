import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";

export default function NotFound() {
    return (
        <div>
            <h1>Ocorreu um erro</h1>
            <Link to="/">
                <Button text="Voltar pra Home" />
            </Link>
            <Footer value="404" text="Não encontrado"/>
        </div>
    )
}