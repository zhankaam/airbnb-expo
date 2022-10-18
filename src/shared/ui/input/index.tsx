import React from 'react';
import { KeyboardTypeOptions, TextInput, TextInputAndroidProps } from 'react-native';

import { COLORS } from 'src/app/colors';

import styles from './styles';

type PropsType = {
  autoComplete: TextInputAndroidProps['autoComplete'];
  keyboardType: KeyboardTypeOptions;
  placeholder: string;
  secureTextEntry: boolean;
  placeholderTextColor: string;
  maxLength: number;
  error: string;
  value: string;
  onChangeText(text: string): void;
};

const Input = ({
  error,
  value,
  onChangeText,
  placeholderTextColor = COLORS.BLACK,
  ...props
}: Partial<PropsType>) => {
  // const [text, setText] = React.useState('');
  const inputStyle = error ? styles.error : styles.main;

  // const onChangeText = (text: string) => {
  //   setText(text);
  //   onTextChange && onTextChange(text);
  // };

  return (
    <TextInput
      {...props}
      style={[styles.base, inputStyle]}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default Input;
