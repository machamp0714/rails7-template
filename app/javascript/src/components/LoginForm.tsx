import React, { useState } from 'react';

import { Button } from './Button';

export const LoginForm: React.FC = () => {
  const [values, setValues] = useState({ email: '', password: '' })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('ok');
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = {
      ...values,
      [event.target.name]: event.target.value
    }
    setValues(newValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>email</label>
        <input 
          type='text'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          name='email'
          value={values.email}
          id='email'
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>password</label>
        <input 
          type='password'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          name='password'
          value={values.password}
          id='password'
          onChange={handleChange}
        />
      </div>
      <Button type='submit' label='Login' />
    </form>
  )
}
