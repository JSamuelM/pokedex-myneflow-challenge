import { useFavoritesStore } from '../../../stores/favorites/favorites.store';
import { PokemonList } from '../../components/pokemon/PokemonList';

export const FavoritesPage = () => {

  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <PokemonList pokemons={favorites} />
  )
}
