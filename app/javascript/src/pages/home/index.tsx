import React from 'react';
import { Link } from 'react-router-dom';
import { Memo } from '../../components/Memo';

const array = ['a', 'b', 'c'];

export const Home = () => {
  return (
    <>
      <Link to="/blogs/new">BlogsNew</Link>
      <Memo array={array} />
    </>
  );
};
