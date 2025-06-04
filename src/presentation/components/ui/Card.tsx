import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  baseClassName?: string;
}

export const Card = ({ children, baseClassName }: Props) => {
  return (
    <div className={`bg-white max-w-sm ${baseClassName}`}>
      { children }
    </div>
  )
}
