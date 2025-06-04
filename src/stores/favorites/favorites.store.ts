import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { Pokemon } from '../../domain/entities/pokemon';

interface FavoritesState {
  favorites: Pokemon[];
  addFavoritePokemon: (pokemon: Pokemon) => void;
  removeFavoritePokemon: (id: number) => void;
  checkPokemonIsInFavorites: (id: number) => boolean | undefined;
}

export const useFavoritesStore = create<FavoritesState>()(
  devtools(
    persist(
      (set, get) => ({
        favorites: [],

        addFavoritePokemon: (pokemon) => set(state => ({
          favorites: [...state.favorites, pokemon]
        })),
        removeFavoritePokemon: (id) => set((state) => ({
          favorites: state.favorites.filter((item) => item.id !== id)
        })),
        checkPokemonIsInFavorites: (id) => get().favorites.some((item) => item.id === id)
      }),
      { name: 'pokemons-favorites-storage' }
    )
  )
)
