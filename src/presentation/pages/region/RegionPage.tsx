import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { useRegionsStore } from '../../../stores/regions/regions.store'
import { getPokemons } from '../../../actions/get-pokemons'
import { PokemonList } from '../../components/pokemon/PokemonList'

type RegionParams = {
  regionName: string;
}

export const RegionPage = () => {

  const getRegionByName = useRegionsStore(state => state.getRegionByName)
  const { regionName } = useParams<RegionParams>()
  const regionData = getRegionByName(regionName!)
 
  const { isLoading, data: pokemons = [], error } = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons(regionData!.urlLimit)
  });

  if (isLoading) {
    return <div>Loading pokemons...</div>
  }

  if (error) {
    return <div>Failed to obtain Pokemon from the { regionData?.name } region</div>
  }

  return (
    <div className='my-10 px-4'>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}
