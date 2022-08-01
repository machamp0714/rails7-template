import React from 'react';
import { clsx } from 'clsx';

interface AlertProps {
  message: string;
  type: 'success' | 'danger';
}

interface IconNodeProps {
  type: AlertProps['type'];
}

const IconNode: React.FC<IconNodeProps> = ({ type }: IconNodeProps) => {
  return (
    <svg
      aria-hidden="true"
      className={clsx('flex-shrink-0 w-5 h-5', {
        'text-red-700 dark:text-red-800': type === 'danger',
        'text-green-700 dark:text-green-800': type === 'success',
      })}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

interface CloseButtonProps {
  type: AlertProps['type'];
  handleClose: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({
  type,
  handleClose,
}: CloseButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        'ml-auto -mx-1.5 -my-1.5 focus:ring-2 p-1.5 inline-flex h-8 w-8 rounded-lg',
        {
          'bg-red-100 text-red-500  focus:ring-red-400  hover:bg-red-200 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300':
            type === 'danger',
          'bg-green-100 text-green-500 focus:ring-green-400  hover:bg-green-200 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300':
            type === 'success',
        }
      )}
      onClick={handleClose}
      data-dismiss-target="#alert-2"
      aria-label="Close"
    >
      <span className="sr-only">Close</span>
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  );
};

export const Alert: React.FC<AlertProps> = ({ message, type }: AlertProps) => {
  const [closed, setClosed] = React.useState(false);

  return (
    <div
      className={clsx('flex p-4 mb-4 rounded-lg', {
        'bg-red-100 dark:bg-red-200': type === 'danger',
        'bg-green-100 dark:bg-green-200': type === 'success',
        hidden: closed,
      })}
      role="alert"
    >
      <IconNode type={type} />
      <div
        className={clsx('ml-3 text-sm font-medium', {
          'text-red-700 dark:text-red-800': type === 'danger',
          'text-green-700 dark:text-green-800': type === 'success',
        })}
      >
        {message}
      </div>
      <CloseButton type={type} handleClose={() => setClosed(true)} />
    </div>
  );
};
