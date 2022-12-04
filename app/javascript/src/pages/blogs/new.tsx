import React from 'react';
import * as z from 'zod';

import { useCreateBlog, BlogCreateParams, Blog } from '../../api/blogs';
import { Form } from '../../components/Form';
import { Button } from '../../components/Button';
import { Alert } from '../../components/Alert';
import { ErrorMessage } from '../../components/ErrorMessage';

interface Props {
  blogs: Blog[];
}

export const BlogsNew: React.FC<Props> = ({ blogs }: Props) => {
  const schema = z.object({
    title: z.string().min(1, { message: 'タイトルは必須です' }),
    description: z.string(),
  });

  const mutation = useCreateBlog();

  const onSubmit = (data: BlogCreateParams) => {
    mutation.mutate(data);
  };

  return (
    <div className="w-full max-w-xs">
      {mutation.isSuccess && <Alert type="success" message="Blog Created!" />}
      {mutation.isError && <ErrorMessage error={mutation.error} />}
      <h1>ブログ作成</h1>
      <Form<BlogCreateParams> onSubmit={onSubmit} schema={schema}>
        {({ register, formState }) => (
          <>
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
              {formState.errors.title?.message && (
                <span>{formState.errors.title?.message}</span>
              )}
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
                {...register('description')}
              />
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit">Post</Button>
            </div>
          </>
        )}
      </Form>
      <ul className="list-disc">
        {blogs.map((blog) => {
          return <li key={blog.id}>{blog.title}</li>;
        })}
      </ul>
    </div>
  );
};
