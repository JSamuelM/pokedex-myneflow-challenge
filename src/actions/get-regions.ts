import { pokeApi } from '../config/api/pokeApi';
import type { Region } from '../domain/entities/region'
import type { RegionsResponse } from '../infraestructure/interfaces/regions.interface';


export const getRegions = async (): Promise<Region[]> => {
  try {
    const url = `/region`;
    const { data } = await pokeApi.get<RegionsResponse>(url);
    
    return data.results;
  } catch (error) {
    throw new Error(`Error getting regions: ${error}`);
  }
}