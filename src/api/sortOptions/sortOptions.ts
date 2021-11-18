import { SortOption } from './types';
import { get } from '../shared/methods';

export async function getSortOptions(): Promise<SortOption[]> {
  const { data } = await get<SortOption[]>('sort-options');
  return data;
}
