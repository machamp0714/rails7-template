import React, { useRef, forwardRef } from 'react';

const MyInput = forwardRef<HTMLInputElement>(function MyInput(props, ref) {
  return <input {...props} ref={ref} />;
});

export const Home = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
};
