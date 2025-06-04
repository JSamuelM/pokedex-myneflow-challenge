import { Route, Routes } from 'react-router'
import { MainLayout } from './presentation/layout/MainLayout'
import { RegionsPage } from './presentation/pages/region/RegionsPage'
import { RegionPage } from './presentation/pages/region/RegionPage'
import { PokemonPage } from './presentation/pages/pokemon/PokemonPage'
import { FavoritesPage } from './presentation/pages/favorite/FavoritesPage'

export const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<RegionsPage />} />
        <Route path='/region/:regionName' element={<RegionPage />} />
        <Route path='/pokemon/:pokemonId' element={<PokemonPage />} />
        <Route path='/favorites/' element={<FavoritesPage />} />
      </Route>
    </Routes>
  )
}
