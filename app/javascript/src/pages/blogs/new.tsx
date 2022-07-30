import React from 'react';

import { Button } from '../../components/Button';

export const BlogsNew: React.FC = () => {
  return (
    <div className="w-full max-w-xs">
      <h1>ブログ作成</h1>
      <form className="bg-white px-8 pt-6 pb-8 mb-4">
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
          />
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
          />
        </div>
        <div className="flex items-center justify-between">
          <Button type="submit" label="Post" />
        </div>
      </form>
    </div>
  );
};
