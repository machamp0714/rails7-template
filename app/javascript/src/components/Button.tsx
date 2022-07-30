import React from 'react';
import { clsx } from 'clsx';

const variants = {
  primary: 'bg-blue-500 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { variant = 'primary', type = 'button', children } = props;

  return (
    <button
      type={type}
      className={clsx(variants[variant], 'font-bold py-2 px-4 rounded')}
    >
      {children}
    </button>
  );
};
