import React from 'react';
import {
  useForm,
  SubmitHandler,
  UseFormReturn,
  FieldValues,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType, ZodTypeDef } from 'zod';
import { clsx } from 'clsx';

type FormProps<TFormValues extends FieldValues> = {
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  onSubmit: SubmitHandler<TFormValues>;
  schema: ZodType<unknown, ZodTypeDef, unknown>;
  className?: string;
};

export const Form = <TFormValues extends FieldValues>({
  children,
  onSubmit,
  schema,
  className,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    resolver: zodResolver(schema),
  });
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
