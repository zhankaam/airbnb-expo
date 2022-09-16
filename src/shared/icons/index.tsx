import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

type IconPropsType = {
  style?: StyleProp<TextStyle>;
  size: number;
  name: string;
  color: string;
};

export const BriefCaseIcon = ({ style = {}, ...rest }: IconPropsType) => (
  <Feather style={style} {...rest} />
);
