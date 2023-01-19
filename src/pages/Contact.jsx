import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { getPokemon } from "../api/pokemon"
import { Link } from "react-router-dom";

export default function Contact() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemon(setPokemons);
    },[])

    return (
        <div>
            <Header firstItem="Item 1" secondItem="Item 2"/>
            <h1>Olá mundo - contato</h1>
            {pokemons.map((pokemon) => {
                return ( 
                    <div>
                        <p>{pokemon.name}</p>
                        <a href={pokemon.url} target="_blank">Clique aqui para saber mais</a>
                    </div>
                )
            })}
            
            <Link to="/">
                <Button text="Home" />
            </Link>
            <Footer value="Footer do contato" text="texto da Home"/>
        </div>
    )
}