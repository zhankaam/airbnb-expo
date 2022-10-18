import React from 'react';
import { Pressable, Text, View } from 'react-native';

import globalStyle from 'src/app/global-style';
import { useTypedSelector } from 'src/app/store';
import AirbnbLoader from 'src/shared/ui/airbnb-loader';
import Forms from 'src/shared/ui/authentication-layout/form';
import { PropsType } from 'src/shared/ui/authentication-layout/types';

import Button from '../button';
import Header from './header';
import styles from './styles';

const AuthenticationLayout = ({
  title = '',
  submitButtonName,
  footerButtonName,
  footerTitle,
  buttonCustomStyles,
  footerButtonStyles,
  onFooterTextPress,
  onSubmit,
  ...props
}: Partial<PropsType>) => {
  const isLoading = useTypedSelector(state => state.auth.isLoading);
  const error = useTypedSelector(state => state.auth.error);

  return (
    <>
      {isLoading ? (
        <AirbnbLoader />
      ) : (
        <View style={styles.container}>
          <Header title={title} />
          <Forms title={title} {...props} />
          {error && <Text style={styles.error}>{error}</Text>}
          <Button
            text={`${submitButtonName} (skip)`}
            buttonCustomStyles={[styles.button, buttonCustomStyles]}
            textCustomStyles={[styles.buttonText, globalStyle.text]}
            onClick={onSubmit}
          />
          <View>
            <Text style={[styles.footerText, globalStyle.primaryText]}>{footerTitle}</Text>
            <Pressable style={styles.loginButton} onPress={onFooterTextPress}>
              <Text style={[styles.loginButtonText, globalStyle.primaryText, footerButtonStyles]}>
                {footerButtonName}
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </>
  );
};

export default AuthenticationLayout;
