import React, { useState } from "react";

const Poki = () => {
    const [pokemon, setPokemon] = useState(null);
    const [search, setSearch] = useState("");

    const fetchPokemon = () => {
        if (!search.trim()) return;
        fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
            .then(response => response.json())
            .then(data => setPokemon(data))
            .catch(() => setPokemon(null));
    };

    return (
        <div className="pokemon-container">
            <h1>Pokemon Search</h1>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter Pokemon name"
                className="search-input"
            />
            <button onClick={fetchPokemon} className="search-button">Search</button>
            {pokemon && (
                <div className="pokemon-card">
                    <h2>{pokemon.name}</h2>
                    <h3>Images</h3>
                    <img src={pokemon.sprites?.front_shiny} alt={pokemon.name} className="pokemon-sprite" />
                    <img src={pokemon.sprites?.front_default} alt={pokemon.name} className="pokemon-sprite" />
                    <img src={pokemon.sprites?.front_female} alt={pokemon.name} className="pokemon-sprite" />
                    <img src={pokemon.sprites?.back_default} alt={pokemon.name} className="pokemon-sprite" />
                    <div className="pokemon-info">
                        <p>Weight: {pokemon.weight}kg</p>
                        <p>Height: {pokemon.height}</p>
                        <p>Order: {pokemon.order}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Poki;
