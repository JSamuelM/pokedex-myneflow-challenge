import { useQuery } from '@tanstack/react-query';
import { getRegions } from '../../../actions/get-regions';
import { RegionList } from '../../components/region/RegionList';

export const RegionsPage = () => {

  const { isLoading, data: regions = [], error } = useQuery({
    queryKey: ['regions'],
    queryFn: () => getRegions(),
  });

  if (isLoading) {
    return <div className='font-bold text-xl'>⌛ Loading regions...</div>
  }

  if (error) {
    return <div>❌ Error fetching regions...</div>
  }

  return (
    <div>
      <h1 className="text-4xl text-center font-bold mb-10">Regions</h1>
      <RegionList regions={regions} />
    </div>
  )
}
