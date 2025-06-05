import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { useRegionsStore } from '../../../stores/regions/regions.store'
import { getPokemons } from '../../../actions/get-pokemons'
import { PokemonList } from '../../components/pokemon/PokemonList'
import { LoadingData } from '../../shared/LoadingData'
import { ErrorData } from '../../shared/ErrorData'

type RegionParams = {
  regionName: string;
}

export const RegionPage = () => {

  const getRegionByName = useRegionsStore(state => state.getRegionByName)
  const { regionName } = useParams<RegionParams>()
  const regionData = getRegionByName(regionName!)
 
  const { isLoading, data: pokemons = [], error } = useQuery({
    queryKey: ['pokemons', regionData?.name],
    queryFn: () => getPokemons(regionData!.urlLimit),
    staleTime: 1000 * 60 * 60
  });

  if (isLoading) {
    return <LoadingData />
  }

  if (error) {
    return <ErrorData message={`Failed to obtain Pokemon from the ${ regionData?.name } region`} />
  }

  return (
    <div className='my-10 px-4'>
      <h1 className="text-4xl text-center capitalize font-bold mb-10">{ regionName }</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}
