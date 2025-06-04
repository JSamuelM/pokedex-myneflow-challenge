import type { Pokemon } from '../../domain/entities/pokemon';
import type { PokeAPIEvolution } from '../interfaces/evolution.interface';

export class EvolutionMapper {
  
  static async pokeApiEvolutionToEntity(data: PokeAPIEvolution): Promise<Pokemon> {
    return {
      
    }
  }
}