import axios from 'axios';

export const getPokemon = async (setPokemons) => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon`)
        .then((response) => {
            setPokemons(response.data.results)
        }).catch((error) => {
            console.log(error.code)
        });
}