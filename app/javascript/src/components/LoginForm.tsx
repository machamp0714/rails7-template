import React, { useState } from 'react';

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
          name='email'
          value={values.email}
          id='email'
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label htmlFor='password'>password</label>
        <input 
          type='password'
          name='password'
          value={values.password}
          id='password'
          onChange={handleChange}
        />
      </div>
      <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Submit</button>
    </form>
  )
}
