import { axios } from '../../../lib/axios';
import { useQuery } from '@tanstack/react-query';

import { Blog } from '../types';

export const getBlogs = (): Promise<Blog[]> => {
  return axios.get('/blogs');
};

export const useGetBlogs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: getBlogs,
    staleTime: Infinity,
  });
};
