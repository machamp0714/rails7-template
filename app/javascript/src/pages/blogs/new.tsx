import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { axios } from '../../lib/axios';
import { useMutation } from '@tanstack/react-query';

import { Button } from '../../components/Button';
import { Alert } from '../../components/Alert';
import Axios, { AxiosError } from 'axios';
import { HTTPError } from '../../types';

type FormData = {
  title: string;
  description: string;
};

type Blog = {
  id?: number;
  title: string;
  description?: string;
  created_at: string;
  updated_at: string;
};

type ErrorMessageProps = {
  mutationError: AxiosError<HTTPError>;
};

const ErrorMessage = ({ mutationError }: ErrorMessageProps) => {
  if (!mutationError.response) {
    throw mutationError;
  }

  return (
    <ul>
      {mutationError.response.data.title.map((message: string) => {
        return <li key={message}>{message}</li>;
      })}
    </ul>
  );
};

export const BlogsNew: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const addBlog = (data: FormData): Promise<Blog> => {
    return axios.post('/blogs', data);
  };

  const mutation = useMutation<Blog, AxiosError<HTTPError>, FormData>(addBlog, {
    onSuccess: () => {
      setVisible(true);
    },
    onError: (error, variables, context) => {
      console.log(error, variables, context);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="w-full max-w-xs">
      {visible && <Alert type="success" message="Blog Created!" />}
      {mutation.isError && <ErrorMessage mutationError={mutation.error} />}
      <h1>ブログ作成</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="title"
            {...register('title', { required: true })}
          />
          {errors.title && <span>Title is required</span>}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            placeholder="description"
            {...register('description', { required: true })}
          />
          {errors.description && <span>Description is required</span>}
        </div>
        <div className="flex items-center justify-between">
          <Button type="submit">Post</Button>
        </div>
      </form>
    </div>
  );
};
