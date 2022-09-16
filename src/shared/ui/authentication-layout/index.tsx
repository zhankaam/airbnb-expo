import React from 'react';
import { Pressable, StyleProp, Text, TextStyle, View } from 'react-native';

import { COLORS } from 'src/app/colors';

import globalStyles from '../../../app/global-styles';
import { BriefCaseIcon } from '../../icons';
import CustomButton from '../button';
import Input from '../input';
import styles from './styled';

type StringValues = Record<
  'title' | 'submitButtonName' | 'footerButtonName' | 'footerTitle',
  string
>;
type StyleProps = Record<'buttonCustomStyles' | 'footerButtonStyles', StyleProp<TextStyle>>;

type PropsType = StringValues &
  StyleProps & {
    onFooterTextPress(): void;
  };

const AuthenticationLayout = ({
  title,
  submitButtonName,
  footerButtonName,
  footerTitle,
  buttonCustomStyles,
  footerButtonStyles,
  onFooterTextPress,
}: Partial<PropsType>) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <BriefCaseIcon style={styles.icon} name="briefcase" size={64} color={COLORS.LIGHT_RED} />
        <Text style={[styles.title, globalStyles.primaryText]}>{title}</Text>
      </View>
      <View>
        <Input placeholder="Email" style={styles.input} onTextChange={text => console.log(text)} />
        <Input
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          onTextChange={text => console.log(text)}
        />
      </View>
      <CustomButton
        text={`${submitButtonName} (skip)`}
        buttonCustomStyles={[styles.button, buttonCustomStyles]}
        textCustomStyles={[styles.buttonText, globalStyles.text]}
        // onClick={() => { alert('Clicked!') }}
      />
      <View>
        <Text style={[styles.footerText, globalStyles.primaryText]}>{footerTitle}</Text>
        <Pressable style={styles.loginButton} onPress={onFooterTextPress}>
          <Text style={[styles.loginButtonText, globalStyles.primaryText, footerButtonStyles]}>
            {footerButtonName}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AuthenticationLayout;
