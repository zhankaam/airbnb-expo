import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';

type IconPropsType = {
  style?: StyleProp<TextStyle>;
  size: number;
  name: string;
  color: string;
};

export const FeatherIcon = ({ style = {}, ...rest }: IconPropsType) => (
  <Feather style={style} {...rest} />
);

export const AntDesignIcon = ({ style = {}, ...rest }: IconPropsType) => (
  <AntDesign style={style} {...rest} />
);

export const FontistoIcon = ({ style = {}, ...rest }: IconPropsType) => (
  <Fontisto style={style} {...rest} />
);

export const EvilIconsIcon = ({ style = {}, ...rest }: IconPropsType) => (
  <EvilIcons style={style} {...rest} />
);

export const FontAwesome5Icon = ({ style = {}, ...rest }: IconPropsType) => (
  <FontAwesome5 style={style} {...rest} />
);

export const FontAwesomeIcon = ({ style = {}, ...rest }: IconPropsType) => (
  <FontAwesome style={style} {...rest} />
);
