import axios from "axios";

export const buscaCep = async (cep, setRua, setBairro) => {
    await axios.get(`https://viacep.com.br/ws/${cep}/json`)
        .then((response) => {
            setRua(response.data.logradouro)
            setBairro(response.data.bairro)
        }).catch((error) => {
            console.log(error.code)
        });    
}