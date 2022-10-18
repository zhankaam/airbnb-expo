import React from 'react';
import { KeyboardTypeOptions, Text, TextInput, TextInputAndroidProps } from 'react-native';

import { Controller } from 'react-hook-form';
import { COLORS } from 'src/app/colors';

import styles from './styles';

type PropsType = {
  autoComplete: TextInputAndroidProps['autoComplete'];
  keyboardType: KeyboardTypeOptions;
  placeholder: string;
  secureTextEntry: boolean;
  placeholderTextColor: string;
  maxLength: number;
  name: string;
  error: string;
  control: any; // @TODO
  rules: any;
};

const Input = ({
  error,
  name,
  placeholderTextColor = COLORS.BLACK,
  ...props
}: Partial<PropsType>) => {
  const inputStyle = error ? styles.error : styles.main;

  return (
    <>
      <Controller
        {...props}
        render={({ field: { onChange, value } }) => (
          <TextInput
            {...props}
            style={[styles.base, inputStyle]}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={name ?? ''}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

export default Input;
