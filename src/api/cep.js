import axios from "axios";

export const buscaCep = async () => {
    let cep = document.getElementById("cep").value;
    let response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.log(error.code)
        });
    console.log(response)
}