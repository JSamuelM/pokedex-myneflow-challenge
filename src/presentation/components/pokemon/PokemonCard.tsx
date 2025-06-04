import type { Pokemon } from '../../../domain/entities/pokemon'
import { Card } from '../ui/Card'

interface Props {
  pokemon: Pokemon;
}

const typeImagesPath = '../../../assets/pokemon-types'

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Card baseClassName='relative shadow-lg w-full mt-10 md:mt-5'>
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <img className='rounded-full object-cover' src={pokemon.sprites[0]} alt={pokemon.name} />
      </div>

      <div className='pt-12 pb-6 px-6 overflow-hidden text-center'>
        <p className='text-gray-500 text-sm font-medium mb-2'>N° {pokemon.id}</p>
        <p className='text-gray-800 text-xl font-bold mb-2'>{pokemon.name}</p>
        
        {/* types */}
        <div className='flex justify-center gap-2'>
          {
            pokemon.types.map((type) => (
              <img 
                key={type} 
                src={`${typeImagesPath}/${type}.png`} alt={type}
                className='object-cover'
              />
            ))
          }
        </div>
      </div>
    </Card>
  )
}
