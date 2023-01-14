import React, { useMemo } from 'react';

export const Memo = ({ array }: { array: Array<string> }) => {
  const memoizedValue = useMemo<Array<string>>(() => {
    console.log('called'); // calledは1回しか呼ばれない
    return array.map((s) => s.toUpperCase());
  }, [array]);

  return (
    <>
      <ul>
        {memoizedValue.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <ul>
        {memoizedValue.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </>
  );
};
