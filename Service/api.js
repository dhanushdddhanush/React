const API_ENDPOINTS = {
   
    POKEMON: "https://pokeapi.co/api/v2",
   
  };
  
  export const api = {
    async getPokemon(pokemonName) {
      try {
        const response = await fetch(
          `${API_ENDPOINTS.POKEMON}/pokemon/${pokemonName.toLowerCase()}`
        );
        if (!response.ok) throw new Error("Pokemon not found");
        return await response.json();
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    },
  
  };
  