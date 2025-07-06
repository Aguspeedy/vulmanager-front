import { useQuery } from '@tanstack/react-query';
import { fetchUserSession } from '../services/authService';

export const useAuth = () => {
  return useQuery({
    queryKey: ['auth', 'me'],
    queryFn: fetchUserSession,
    staleTime: 1000 * 60 * 5,
    retry: (failureCount, error: any) => {
      if (error?.status === 401) return false;
      return failureCount < 3;
    },
  });
};
