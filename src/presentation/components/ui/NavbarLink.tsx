import type { ReactNode } from 'react';
import { NavLink } from 'react-router';

interface Props {
  to: string;
  children: ReactNode,
  baseClassName: string;
}

export const NavbarLink = ({ to, children, baseClassName }: Props) => {

  return (
    <NavLink
      to={to}
      className={({ isActive }) => isActive ? `${baseClassName} border-b-2 font-semibold` : `${baseClassName} ml-2`}
    >
      { children }
    </NavLink>
  )
}
