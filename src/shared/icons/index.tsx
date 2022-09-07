import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {StyleProp, TextStyle} from 'react-native';

type IconPropsType = {
    style?: StyleProp<TextStyle>,
    size: number,
    name: string,
    color: string
}

export const BriefCaseIcon = ({style = {}, ...rest}: IconPropsType) => <Feather
    style={style}
    {...rest}
/>;
