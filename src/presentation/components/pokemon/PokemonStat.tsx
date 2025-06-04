import type { Stat } from '../../../domain/entities/pokemon'

interface Props {
  stats: Stat[] | undefined;
}

export const PokemonStat = ({ stats }: Props) => {
  if (!stats) {
    return <div>🥲 The pokemon doesnt has Stats</div>
  }

  return (
    <>
      {
        stats.map((stat) => (
          <div key={stat.name}>
            <div className="flex justify-between">
              <p className="text-bold capitalize mb-2">{stat.name}</p>
              <p className="text-bold mb-2">{stat.value}</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{
                width: `${stat.value}%`
              }}></div>
            </div>
          </div>
        ))
      }
    </>
  )
}
