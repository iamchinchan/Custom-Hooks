import React from 'react';
import useCounter from '../customHooks/useCounter';

import Card from './Card';

const BackwardCounter = () => {
  const counter = useCounter("-");
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
