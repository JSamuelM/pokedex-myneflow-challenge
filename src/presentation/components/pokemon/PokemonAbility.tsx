import type { Pokemon } from '../../../domain/entities/pokemon';

interface Props {
  abilities: Pokemon["abilities"] | undefined;
}

export const PokemonAbility = ({ abilities }: Props) => {

  if (!abilities) {
    return <div>Abilities not found.</div>
  }

  return (
    <>
      {
        abilities.map(ability => (
          <span key={ ability } className="rounded-full font-semibold capitalize mr-3">{ ability }</span>
        ))
      }
    </>
  )
}
