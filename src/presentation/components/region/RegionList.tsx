import { Link } from 'react-router';
import type { Region } from '../../../domain/entities/region'
import { RegionCard } from '../../components/region/RegionCard';

interface Props {
  regions: Region[];
}

export const RegionList = ({ regions }: Props) => {
  return (
    <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
        regions.map((region) => (
          <Link to={`/region/${region.name}`} key={region.name}>
            <RegionCard key={region.name} region={region} />
          </Link>
        ))
      }
    </div>
  )
}
