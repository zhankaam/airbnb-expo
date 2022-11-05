import React from 'react';
import { View } from 'react-native';

import { Control, FieldError } from 'react-hook-form';
import { FormDataType } from 'src/shared/api/auth';
import { useTogglePasswordVisibility } from 'src/shared/hooks/use-toggle-password-visibility';
import Input from 'src/shared/ui/input';

export type PropsType = {
  control: Control<FormDataType> | Control<Pick<FormDataType, 'email' | 'password'>>;
  title: string;
  errors: Record<string, FieldError>;
  watch: (value: string) => string;
};

const Forms = ({ control, title, errors, watch }: PropsType) => {
  const { isPasswordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const {
    isPasswordVisibility: isPasswordConfirmationVisibility,
    rightIcon: passwordConfirmationIcon,
    handlePasswordVisibility: handleConfirmationPasswordVisibility,
  } = useTogglePasswordVisibility();

  return (
    <View>
      {title === 'Sign Up' && (
        <Input
          autoComplete="name"
          error={errors.name?.message}
          placeholder="Name"
          control={control}
          rules={{
            required: 'name is required',
          }}
          name="name"
        />
      )}
      <Input
        autoComplete="email"
        control={control}
        rules={{
          required: 'email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Email address is invalid',
          },
        }}
        error={errors.email?.message}
        keyboardType="email-address"
        placeholder="Email"
        name="email"
      />

      <Input
        autoComplete="password"
        control={control}
        rules={{
          required: 'password is required',
        }}
        error={errors.password?.message}
        placeholder="Password"
        name="password"
        secureTextEntry={isPasswordVisibility}
        rightIcon={rightIcon}
        handlePasswordVisibility={handlePasswordVisibility}
      />

      {title === 'Sign Up' && (
        <>
          <Input
            placeholder="Confirm Password"
            control={control}
            rules={{
              required: 'password confirmation is required',
              validate: (val: string) => {
                if (watch('password') != val) {
                  return 'Your passwords do no match';
                }
              },
            }}
            error={errors.password_confirmation?.message}
            secureTextEntry={isPasswordConfirmationVisibility}
            rightIcon={passwordConfirmationIcon}
            handlePasswordVisibility={handleConfirmationPasswordVisibility}
            name="password_confirmation"
          />
          <Input
            autoComplete="tel"
            error={errors.phone?.message}
            maxLength={10}
            keyboardType="numeric"
            placeholder="Phone Number"
            control={control}
            rules={{
              required: 'phone is required',
              minLength: {
                value: 10,
                message: 'The length of your phone number must 10 characters',
              },
            }}
            name="phone"
          />
        </>
      )}
    </View>
  );
};

export default Forms;
