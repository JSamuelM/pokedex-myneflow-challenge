import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Chip = ({ children }: Props) => {
  return (
    <div className='rounded-lg border-1 inline-block p-1'>
      { children }
    </div>
  )
}
