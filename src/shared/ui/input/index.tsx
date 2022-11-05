import React from 'react';
import {
  KeyboardTypeOptions,
  Pressable,
  Text,
  TextInput,
  TextInputAndroidProps,
  View,
} from 'react-native';

import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { COLORS } from 'src/app/colors';
import { FontAwesomeIcon } from 'src/shared/icons';

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
  control: Control<any>; // @TODO
  rules: RegisterOptions;
  rightIcon: string;
  handlePasswordVisibility: () => void;
};

const Input = ({
  error,
  name = '',
  rightIcon = '',
  handlePasswordVisibility,
  placeholderTextColor = COLORS.BLACK,
  ...props
}: Partial<PropsType>) => {
  const inputStyle = error ? styles.error : styles.main;

  return (
    <View style={styles.container}>
      <Controller
        {...props}
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              {...props}
              style={[styles.base, inputStyle]}
              onChangeText={onChange}
              value={value}
            />
            {rightIcon && (
              <Pressable onPress={handlePasswordVisibility}>
                <FontAwesomeIcon name={rightIcon} size={22} color={COLORS.BLACK} />
              </Pressable>
            )}
          </View>
        )}
        name={name}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default Input;
