import React from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity } from 'react-native';

import styles from './styled';

type PropsType = {
  text: string;
  buttonCustomStyles: StyleProp<TextStyle>;
  textCustomStyles: StyleProp<TextStyle>;
  onClick(): void;
};

const Button = ({
  text = 'Button',
  buttonCustomStyles,
  textCustomStyles,
  onClick,
}: Partial<PropsType>) => {
  return (
    <TouchableOpacity style={[styles.button, buttonCustomStyles]} onPress={onClick}>
      <Text style={[styles.text, textCustomStyles]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
