import { useQuery } from '@tanstack/react-query';
import { getRegions } from '../../../actions/get-regions';
import { RegionList } from '../../components/region/RegionList';
import { LoadingData } from '../../shared/LoadingData';
import { ErrorData } from '../../shared/ErrorData';

export const RegionsPage = () => {

  const { isLoading, data: regions = [], error } = useQuery({
    queryKey: ['regions'],
    queryFn: () => getRegions(),
  });

  if (isLoading) {
    return <LoadingData />
  }

  if (error) {
    return <ErrorData message="Error fetching regions..." />
  }

  return (
    <div>
      <h1 className="text-4xl text-center font-bold mb-10">Regions</h1>
      <RegionList regions={regions} />
    </div>
  )
}
