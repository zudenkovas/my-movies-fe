import { Credentials, SignInResponse } from './types';
import { post } from '../shared/methods';

export async function logIn(credentials: Credentials): Promise<SignInResponse> {
  const { data } = await post<Credentials, SignInResponse>('login', credentials);
  return data;
}
