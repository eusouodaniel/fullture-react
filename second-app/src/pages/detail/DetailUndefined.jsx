import { Link } from "react-router-dom";

export default function DetailUndefined() {
    return (
        <div>
            <h1>Não existe raça para esse gato!</h1>
            <Link to="/">
                <button>Voltar para home</button>
            </Link>
        </div>
    )
}