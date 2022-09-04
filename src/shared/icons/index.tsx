import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {StyleProp, TextStyle} from 'react-native';

type IconPropsType = {
    style: StyleProp<TextStyle>
}

export const BriefCaseIcon = ({style}: IconPropsType) => <Feather style={style} name="briefcase" size={64} color="#fff" />;
