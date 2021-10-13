import { get } from './shared/methods';

export async function fetchStatus() {
  const { data } = await get<{ health: boolean; version: string }>('health');
  return data;
}
