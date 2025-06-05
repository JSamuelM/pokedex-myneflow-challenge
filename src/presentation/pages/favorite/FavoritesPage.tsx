import { FaceFrownIcon } from '@heroicons/react/24/outline';
import { useFavoritesStore } from '../../../stores/favorites/favorites.store';
import { PokemonList } from '../../components/pokemon/PokemonList';

export const FavoritesPage = () => {

  const favorites = useFavoritesStore((state) => state.favorites);

  if (!favorites.length) {
    return (
      <div className='text-center text-3xl font-semibold'>
        <p className="mb-2">Add a pokemon to your favorites list</p>
        <FaceFrownIcon className="size-16 mx-auto" />
      </div>
    )
  }

  return (
    <PokemonList pokemons={favorites} />
  )
}
