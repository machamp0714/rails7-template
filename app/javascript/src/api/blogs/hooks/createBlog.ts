import { axios } from '../../../lib/axios';
import { useMutation } from '@tanstack/react-query';

import { Blog } from '../types';
import { HTTPError } from '../../../types';
import { queryClient } from '../../../lib/react-query';

export interface BlogCreateParams {
  title: string;
  description?: string;
}

export const createBlog = (data: BlogCreateParams): Promise<Blog> => {
  return axios.post('/blogs', data);
}

export const useCreateBlog = () => {
  return useMutation<Blog, HTTPError, BlogCreateParams>(createBlog, {
    onSuccess: () => {
      void queryClient.invalidateQueries(['blogs']);
    }
  });
}
