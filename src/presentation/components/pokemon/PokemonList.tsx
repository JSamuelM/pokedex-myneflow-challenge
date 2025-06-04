import { Link } from 'react-router';
import type { Pokemon } from '../../../domain/entities/pokemon'
import { PokemonCard } from './PokemonCard';

interface Props {
  pokemons: Pokemon[];
}

export const PokemonList = ({ pokemons }: Props) => {
  return (
    <div className='mt-10 grid grid-cols-1 gap-4 gap-y-6 justify-items-center sm:grid-cols-2 sm:justify-center md:grid-cols-3 lg:grid-cols-4'>
      {
        pokemons.map((pokemon) => (
          <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id} className='block w-full'>
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          </Link>
        ))
      }
    </div>
  )
}
