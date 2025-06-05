import { describe, test, expect, vi, beforeEach } from 'vitest';

import { pokeApi } from '../../src/config/api/pokeApi';
import { PokemonMapper } from '../../src/infraestructure/mappers/pokemon.mapper';
import { getPokemonById } from '../../src/actions/get-pokemon-by-id';
import type { PokeAPIPokemon } from '../../src/infraestructure/interfaces/pokemons.interface';
import type { Pokemon } from '../../src/domain/entities/pokemon';
// import { mock } from 'jest-mock-extended';

// --- Mocks ---
vi.mock('../../src/config/api/pokeApi', () => ({
  pokeApi: {
    get: vi.fn(),
  },
}));

vi.mock('../../src/infraestructure/mappers/pokemon.mapper', () => ({
  PokemonMapper: {
    pokeApiPokemonToEntity: vi.fn(),
  },
}));

const mockPokeApiGet = pokeApi.get as ReturnType<typeof vi.fn>;
const mockPokemonMapperToEntity = PokemonMapper.pokeApiPokemonToEntity as ReturnType<typeof vi.fn>;

const mockPokeAPIPokemon: PokeAPIPokemon = {
  id: 1,
  name: 'bulbasaur',
  base_experience: 64,
  height: 7,
  is_default: true,
  order: 1,
  weight: 69,
  abilities: [],
  forms: [],
  game_indices: [],
  held_items: [],
  location_area_encounters: '',
  moves: [],
  past_types: [],
  species: { name: 'bulbasaur', url: '' },
  sprites: {
    front_default: 'url-to-bulbasaur-sprite.png',
    other: {
      'official-artwork': {
        front_default: 'url-to-official-artwork.png',
        front_shiny: 'url-to-shiny.png'
      },
    },
  },
  stats: [],
  types: [],
};

const mockPokemonEntity: Pokemon = {
  id: 1,
  name: 'Bulbasaur',
  avatar: 'url-to-avatar.ong',
  sprites: ['url-to-official-artwork.png', 'url-to-bulbasaur-sprite.png'],
  types: [],
  color: '#ffffff',
  games: ['red'],
  stats: [{ name: 'hp', value: 40 }],
  abilities: ['ability-1'],
  moves: [{ level: 0, name: 'move-1' }],
  species: { name: 'name', url: 'url-to-specie' }
};

describe('getPokemonById', () => {

  beforeEach(() => {
    mockPokeApiGet.mockClear();
    mockPokemonMapperToEntity.mockClear();
  });


  test('should return a Pokemon entity', async () => {
    mockPokeApiGet.mockResolvedValueOnce({ data: mockPokeAPIPokemon });
    mockPokemonMapperToEntity.mockResolvedValueOnce(mockPokemonEntity);

    const result = await getPokemonById('1');

    expect(mockPokeApiGet).toHaveBeenCalledTimes(1);
    expect(mockPokeApiGet).toHaveBeenCalledWith('/pokemon/1');

    expect(mockPokemonMapperToEntity).toHaveBeenCalledTimes(1);
    expect(mockPokemonMapperToEntity).toHaveBeenCalledWith(mockPokeAPIPokemon);

    expect(result).toEqual(mockPokemonEntity);
  });
});
