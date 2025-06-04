import { pokeApi } from '../config/api/pokeApi'
import type { Pokemon } from '../domain/entities/pokemon'
import type { PokeAPIPokemon, PokeAPIPaginatedResponse } from '../infraestructure/interfaces/pokemons.interface';
import { PokemonMapper } from '../infraestructure/mappers/pokemon.mapper';

export const getPokemons = async (urlLimit: string): Promise<Pokemon[]> => {
  try {
    const url = `${urlLimit}`
    const { data } = await pokeApi.get<PokeAPIPaginatedResponse>(url);

    const pokemonPromises = data.results.map((pokemonInfo) => {
      return pokeApi.get<PokeAPIPokemon>(pokemonInfo.url)
    })

    const pokeApiPokemons = await Promise.all(pokemonPromises);
    const pokemonsPromises = pokeApiPokemons.map((item) => 
      PokemonMapper.pokeApiPokemonToEntity(item.data)
    )

    return await Promise.all(pokemonsPromises);
  } catch (error) {
    console.error(error);    
    throw new Error('Error getting pokemons');
  }
}