import React from 'react';
import { Button, Text, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/app/store';
import { decrement, increment } from 'src/entities/counter/model';

const Explore = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>count: {count}</Text>
      <Button title="Increment value" color="#f194ff" onPress={() => dispatch(increment())} />
      <Button title="Decrement value" onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default Explore;
