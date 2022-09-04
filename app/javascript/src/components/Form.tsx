import React from 'react';
import {
  useForm,
  SubmitHandler,
  UseFormReturn,
  FieldValues,
} from 'react-hook-form';
import { clsx } from 'clsx';

type FormProps<TFormValues extends FieldValues> = {
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  onSubmit: SubmitHandler<TFormValues>;
  className?: string;
};

export const Form = <TFormValues extends FieldValues>({
  children,
  onSubmit,
  className,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>();
  const { handleSubmit } = methods;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx('bg-white px-8 pt-6 pb-8 mb-4', className)}
    >
      {children(methods)}
    </form>
  );
};
