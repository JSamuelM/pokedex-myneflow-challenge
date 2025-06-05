import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { getPokemonById } from '../../../actions/get-pokemon-by-id';
import { PokemonStat } from '../../components/pokemon/PokemonStat';
import { PokemonAbility } from '../../components/pokemon/PokemonAbility';
import { useFavoritesStore } from '../../../stores/favorites/favorites.store';
import { Favorite } from '../../components/ui/Favorite';

type PokemonParams = {
  pokemonId: string;
}

const typeImagesPath = '../../../assets/pokemon-types';

export const PokemonPage = () => {
  const { pokemonId } = useParams<PokemonParams>();

  const { isLoading, data: pokemon, error } = useQuery({
    queryKey: ['pokemon', pokemonId],
    queryFn: () => getPokemonById(pokemonId!.toString())
  });

  const { addFavoritePokemon, removeFavoritePokemon, checkPokemonIsInFavorites } = useFavoritesStore();

  const favoriteHandleClick = () => {
    if (!checkPokemonIsInFavorites(pokemon!.id)) {
      addFavoritePokemon(pokemon!);
    } else {
      removeFavoritePokemon(pokemon!.id)
    }
  }

  if (isLoading) {
    return <div>Loading pokemon...</div>
  }

  if (error) {
    return <div>Failed to obtain Pokemon from the { pokemonId } region</div>
  }

  return (
    <div className='px-10 pt-15'>
      <div className='flex justify-center'>
        <div>
          <Favorite onClick={favoriteHandleClick}>
            {
              checkPokemonIsInFavorites(pokemon!.id)
                ? <StarIconSolid className="size-6" />
                : <StarIcon className="size-6" />

            }
          </Favorite>
        </div>
        <div>
          <p className='text-3xl font-bold capitalize'>{pokemon?.name}</p>
          <p className='text-lg text-center font-bold'>#{pokemon?.id}</p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-10 mb-10'>
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-xl p-4">
          <img src={pokemon?.avatar} alt={pokemon?.name} 
            className='w-72 mx-auto'
          />

          <p className='text-center font-bold mt-5'>Types</p>
          <div className='flex justify-center gap-3 mt-3'>
            {
              pokemon?.types.map((type) => <img key={type} src={`${typeImagesPath}/${type}.png`}
                  alt={pokemon.name} className='w-12'
                />
              )
            }
          </div>
        </div>
        <div className="w-full md:w-2/3 bg-white rounded-lg shadow-xl p-4">
          <p className='text-xl font-semibold mb-4'>Stats</p>
          <div className='flex-col gap-3 mb-4'>
            <PokemonStat stats={pokemon?.stats} />
          </div>
          <p className='font-bold mb-4'>Abilities</p>
          <div className='flex gap-3 mb-4'>
            <PokemonAbility abilities={pokemon?.abilities} />
          </div>
        </div>
      </div>
    </div>
  )
}
