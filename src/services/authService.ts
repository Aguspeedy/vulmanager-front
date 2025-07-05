import api from './client';
import { SignInResponseType } from '../types/signInResponse.types';

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<SignInResponseType> => {
  const res = await api.post('/auth', {
    email,
    password,
  });
  return res.data;
};

export const logout = async () => {
  await api.post('/logout', {}, { withCredentials: true });
};

export const fetchUserSession = async () => {
  const res = await api.get('/auth/me', { withCredentials: true });
  return res.data;
};
