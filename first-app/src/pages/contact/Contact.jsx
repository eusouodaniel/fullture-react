import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPokemon } from "../../api/pokemon";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";

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
                        <a href={pokemon.url} target="_blank" rel="noreferrer">Clique aqui para saber mais</a>
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