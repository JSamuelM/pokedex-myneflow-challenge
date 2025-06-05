import { create } from 'zustand'

interface Region {
  name: string;
  urlLimit: string;
}

interface RegionState {
  regions: Region[];
  getRegionByName: (name: string) => Region | undefined;
}

const initialRegionData: Region[] = [
  {
    name: 'kanto',
    urlLimit: '/pokemon?limit=151&offset=0',
  },
  {
    name: 'johto',
    urlLimit: '/pokemon?limit=100&offset=151',
  },
  {
    name: 'hoenn',
    urlLimit: '/pokemon?limit=135&offset=251',
  },
  {
    name: 'sinnoh',
    urlLimit: '/pokemon?limit=107&offset=386',
  },
  {
    name: 'unova',
    urlLimit: '/pokemon?limit=156&offset=493',
  },
  {
    name: 'kalos',
    urlLimit: '/pokemon?limit=72&offset=649',
  },
  {
    name: 'alola',
    urlLimit: '/pokemon?limit=88&offset=721',
  },
]

// For getting limit pokemon's ids
export const useRegionsStore = create<RegionState>()((_set, get) => ({
  regions: initialRegionData, // init data

  getRegionByName: (name: string) => {
    return get().regions.find(region => region.name.toLowerCase() === name.toLowerCase());
  }
}))
