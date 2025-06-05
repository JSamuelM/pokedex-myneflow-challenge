import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const GridContainer = ({ children }: Props) => {
  return (
    <div className='mt-10 grid grid-cols-1 gap-4 gap-y-6 justify-items-center sm:grid-cols-2 sm:justify-center md:grid-cols-3 lg:grid-cols-4'>
      { children }
    </div>
  )
}
