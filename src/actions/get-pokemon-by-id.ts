import { pokeApi } from '../config/api/pokeApi'
import type { Pokemon } from '../domain/entities/pokemon';
import type { PokeAPIPokemon } from '../infraestructure/interfaces/pokemons.interface'
import { PokemonMapper } from '../infraestructure/mappers/pokemon.mapper';

export const getPokemonById = async (id: string): Promise<Pokemon> => {
  try {
    const { data } = await pokeApi.get<PokeAPIPokemon>(`/pokemon/${ id }`);

    const pokemon = await PokemonMapper.pokeApiPokemonToEntity(data);
    return pokemon;
  } catch (error) {
    console.error(error);    
    throw new Error(`Error getting pokemon by id: ${id}`);
  }
}