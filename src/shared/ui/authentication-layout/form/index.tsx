import React from 'react';
import { TextInput, View } from 'react-native';

import { Controller } from 'react-hook-form';
import Input from 'src/shared/ui/input';

export type PropsType = {
  control: any; // @TODO
  title: string;
  onEmailChangeHandler?: (text: string) => void;
  onPasswordChangeHandler?: (text: string) => void;
  onNameChangeHandler?: (text: string) => void;
  onConfirmationPasswordChangeHandler?: (text: string) => void;
  onPhoneNumberChangeHandler?: (text: string) => void;
};

const Forms = ({
  control,
  title,
  onNameChangeHandler,
  onEmailChangeHandler,
  onPasswordChangeHandler,
  onConfirmationPasswordChangeHandler,
  onPhoneNumberChangeHandler,
}: PropsType) => {
  return (
    <View>
      {title === 'Sign Up' && (
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              autoComplete="name"
              value={value}
              // error={error}
              onChangeText={onChange}
              placeholder="Name"
              // onTextChange={onNameChangeHandler}
            />
          )}
          name="name"
        />
      )}
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email address',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            autoComplete="email"
            value={value}
            // error={error}
            keyboardType="email-address"
            placeholder="Email"
            onChangeText={onChange}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            autoComplete="password"
            value={value}
            // error={error}
            placeholder="Password"
            secureTextEntry
            onChangeText={onChange}
          />
        )}
        name="password"
      />

      {title === 'Sign Up' && (
        <>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Confirm Password"
                value={value}
                // error={error}
                onChangeText={onChange}
                secureTextEntry
              />
            )}
            name="password_confirmation"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                autoComplete="tel"
                // error={error}
                value={value}
                maxLength={10}
                keyboardType="numeric"
                placeholder="Phone Number"
                onChangeText={onChange}
              />
            )}
            name="phone"
          />
        </>
      )}
    </View>
  );
};

export default Forms;
