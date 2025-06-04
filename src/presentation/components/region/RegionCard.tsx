import type { Region } from '../../../domain/entities/region';
import { Card } from '../ui/Card'

interface Props {
  region: Region;
}

const urlCoverImages = `./src/assets/regions`;

export const RegionCard = ({ region }: Props) => {
  return (
    <Card baseClassName={"rounded-lg shadow-lg hover:shadow-xl hover:transition-shadow"}>
      <img 
        src={`${urlCoverImages}/${region.name.toLowerCase()}.png`} 
        className="w-full rounded-t-lg h-40" alt={`Region ${region.name}`}
      />
      <div className="px-6 py-4">
        <h2 className="capitalize font-semibold text-xl text-center">{region.name}</h2>
      </div>
    </Card>
  )
}
