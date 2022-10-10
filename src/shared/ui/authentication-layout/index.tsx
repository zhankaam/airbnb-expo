import React from 'react';
import { Pressable, StyleProp, Text, TextStyle, View } from 'react-native';

import { COLORS } from 'src/app/colors';

import GlobalStyle from '../../../app/global-style';
import { FeatherIcon } from '../../icons';
import CustomButton from '../button';
import Input from '../input';
import styles from './styles';

type StringValues = Record<
  'title' | 'submitButtonName' | 'footerButtonName' | 'footerTitle',
  string
>;
type StyleProps = Record<'buttonCustomStyles' | 'footerButtonStyles', StyleProp<TextStyle>>;

type PropsType = StringValues &
  StyleProps & {
    onFooterTextPress(): void;
    onEmailChangeHandler(text: string): void;
    onPasswordChangeHandler(text: string): void;
    onNameChangeHandler(text: string): void;
    onConfirmationPasswordChangeHandler(text: string): void;
    onPhoneNumberChangeHandler(text: string): void;
    onSubmit(): void;
  };

const AuthenticationLayout = ({
  title,
  submitButtonName,
  footerButtonName,
  footerTitle,
  buttonCustomStyles,
  footerButtonStyles,
  onFooterTextPress,
  onEmailChangeHandler,
  onPasswordChangeHandler,
  onConfirmationPasswordChangeHandler,
  onPhoneNumberChangeHandler,
  onNameChangeHandler,
  onSubmit,
}: Partial<PropsType>) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        {title !== 'Sign Up' && (
          <FeatherIcon style={styles.icon} name="briefcase" size={64} color={COLORS.LIGHT_RED} />
        )}
        <Text style={[styles.title, GlobalStyle.primaryText]}>{title}</Text>
      </View>
      <View>
        {title === 'Sign Up' && (
          <Input placeholder="Name" style={styles.input} onTextChange={onNameChangeHandler} />
        )}
        <Input
          keyboardType="email-address"
          placeholder="Email"
          style={styles.input}
          onTextChange={onEmailChangeHandler}
        />
        <Input
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          onTextChange={onPasswordChangeHandler}
        />
        {title === 'Sign Up' && (
          <>
            <Input
              placeholder="Confirm Password"
              style={styles.input}
              secureTextEntry
              onTextChange={onConfirmationPasswordChangeHandler}
            />
            <Input
              keyboardType="numeric"
              placeholder="Phone Number"
              style={styles.input}
              onTextChange={onPhoneNumberChangeHandler}
            />
          </>
        )}
      </View>
      <CustomButton
        text={`${submitButtonName} (skip)`}
        buttonCustomStyles={[styles.button, buttonCustomStyles]}
        textCustomStyles={[styles.buttonText, GlobalStyle.text]}
        onClick={onSubmit}
      />
      <View>
        <Text style={[styles.footerText, GlobalStyle.primaryText]}>{footerTitle}</Text>
        <Pressable style={styles.loginButton} onPress={onFooterTextPress}>
          <Text style={[styles.loginButtonText, GlobalStyle.primaryText, footerButtonStyles]}>
            {footerButtonName}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AuthenticationLayout;
