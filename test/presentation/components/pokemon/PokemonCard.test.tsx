import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PokemonCard } from '../../../../src/presentation/components/pokemon/PokemonCard';
import { Pokemon } from '../../../../src/domain/entities/pokemon';

const mockPokemon: Pokemon = {
  id: 25,
  name: 'pikachu',
  avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  sprites: ["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"],
  types: ['electric'],
  color: '#ffffff',
  games: ["red","blue"],
  stats: [{"name":"hp","value":35},{"name":"attack","value":55},{"name":"defense","value":40},{"name":"special-attack","value":50},{"name":"special-defense","value":50},{"name":"speed","value":90}],
  abilities: ["static","lightning-rod"],
  moves: [{"name":"mega-punch","level":0},{"name":"pay-day","level":0}],
  species: {"name":"pikachu","url":"https://pokeapi.co/api/v2/pokemon-species/25/"}
};

describe('PokemonCard.tsx', () => {

  test('should render pokemon', () => {
    render(<PokemonCard pokemon={mockPokemon} />);

    expect(screen.getByText('pikachu')).toBeInTheDocument();
    expect(screen.getByText('N° 25')).toBeInTheDocument();
  });
})
