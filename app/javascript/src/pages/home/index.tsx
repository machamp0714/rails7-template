import React, { Suspense, useState } from 'react';

type LoadableState<T> =
  | {
      status: 'pending';
      promise: Promise<T>;
    }
  | {
      status: 'fulfilled';
      data: T;
    }
  | {
      status: 'rejected';
      error: unknown;
    };

export class Loadable<T> {
  #state: LoadableState<T>;
  constructor(promise: Promise<T>) {
    this.#state = {
      status: 'pending',
      promise: promise.then(
        (data) => {
          this.#state = {
            status: 'fulfilled',
            data,
          };
          return data;
        },
        (error: unknown) => {
          this.#state = {
            status: 'rejected',
            error,
          };
          throw error;
        }
      ),
    };
  }
  getOrThrow(): T {
    switch (this.#state.status) {
      case 'pending':
        throw this.#state.promise;
      case 'fulfilled':
        return this.#state.data;
      case 'rejected':
        throw this.#state.error;
    }
  }
}

const DataLoader: React.FC<{
  data: Loadable<string>;
}> = ({ data }) => {
  const value = data.getOrThrow();
  return (
    <div>
      <div>Data is {value}</div>
    </div>
  );
};

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const fetchData1 = async (): Promise<string> => {
  await sleep(Math.floor(Math.random() * 1000));
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`;
};

export const Home: React.FC = () => {
  const [data1] = useState(() => new Loadable(fetchData1()));
  const [data2] = useState(() => new Loadable(fetchData1()));
  const [data3] = useState(() => new Loadable(fetchData1()));

  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader data={data1} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader data={data2} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader data={data3} />
      </Suspense>
    </div>
  );
};
