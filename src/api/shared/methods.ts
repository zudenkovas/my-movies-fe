import axios, { AxiosResponse } from 'axios';

import { BASE_API_URL } from './constants';

export function get<T>(url: string): Promise<AxiosResponse<T>> {
  console.log(BASE_API_URL, process.env);
  return axios.get<T>(`${BASE_API_URL}/${url}`);
}
