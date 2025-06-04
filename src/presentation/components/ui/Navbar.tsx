import logo from '../../../assets/pokedex.webp';
import { NavbarLink } from './NavbarLink';

export const Navbar = () => {

  return (
    <header className="bg-rose-700 text-white mx-auto md:rounded-md">
      <nav className="py-4 px-5 flex justify-between items-center">
        <div>
          <img src={logo} className="h-10" />
        </div>
        <div>
          <NavbarLink to={"/"} 
            baseClassName={"mr-2 pb-2"}
          >
            Regions
          </NavbarLink>
          <NavbarLink to={"/favorites"} 
            baseClassName={"pb-2"}
          >
            Favorites
          </NavbarLink>
        </div>
      </nav>
    </header>
  )
}
