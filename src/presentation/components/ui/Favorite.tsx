import type { ReactNode } from 'react';

interface Props {
  children: ReactNode,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Favorite = ({ onClick, children }: Props) => { 

  return (
    <button onClick={onClick} className='text-gray-700 border border-gray-700 hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-center inline-flex items-center cursor-pointer rounded-full p-2 mr-5'>
      { children }
    </button>
  )
}
