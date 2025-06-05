import { Link } from 'react-router';
import type { Pokemon } from '../../../domain/entities/pokemon'
import { PokemonCard } from './PokemonCard';
import { GridContainer } from '../ui/GridContainer';

interface Props {
  pokemons: Pokemon[];
}

export const PokemonList = ({ pokemons }: Props) => {
  return (
    <GridContainer>
      {
        pokemons.map((pokemon) => (
          <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id} className='block w-full'>
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          </Link>
        ))
      }
    </GridContainer>
  )
}
