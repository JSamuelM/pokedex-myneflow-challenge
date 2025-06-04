import { pokeApi } from '../config/api/pokeApi';
import type { Pokemon } from '../domain/entities/pokemon';
import type { PokeAPIEvolution } from '../infraestructure/interfaces/evolution.interface';
import { PokemonMapper } from '../infraestructure/mappers/pokemon.mapper';

export const getPokemonEvolutionChain = async (id: string): Promise<Pokemon> => {
  try {
    const { data } = await pokeApi.get<PokeAPIEvolution>(`/pokemon/${ id }`);

    const pokemon = await PokemonMapper.pokeApiPokemonToEntity(data);
    return pokemon;
  } catch (error) {
    console.error(error);    
    throw new Error(`Error getting pokemon by id: ${id}`);
  }
}
