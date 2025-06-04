import { Outlet } from 'react-router'
import { Navbar } from '../components/ui/Navbar'
import { Footer } from '../components/ui/Footer';
import pokeball from '../../assets/pokeball-background.png';

export const MainLayout = () => {
  return (
    <>
      <img src={pokeball} className="absolute w-64 rotate-45 opacity-25 -z-1" />
      <div className="main-layout py-0 w-full md:py-5 md:w-5/6 md:mx-auto">
        <Navbar />
        <div className="px-5 py-10">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}
