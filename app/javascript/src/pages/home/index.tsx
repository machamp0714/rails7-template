import React from 'react';
import { Memo } from '../../components/Memo';

const array = ['a', 'b', 'c'];

export const Home = () => {
  return <Memo array={array} />;
};
