import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout } from '../services/authService';
import { useNavigate } from 'react-router';

const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.clear();
      localStorage.removeItem('user-data');
      navigate('/signin');
    },
    onError: error => {
      console.error('Logout failed:', error);
    },
  });
};

export default useLogout;
