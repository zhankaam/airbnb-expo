import React from 'react';
import { Text, View } from 'react-native';

import { COLORS } from 'src/app/colors';
import globalStyle from 'src/app/global-style';
import { FeatherIcon } from 'src/shared/icons';
import styles from 'src/shared/ui/authentication-layout/styles';

type PropsType = {
  title: string;
};

const Header: React.FC<PropsType> = ({ title }) => (
  <View style={styles.section}>
    {title !== 'Sign Up' && (
      <FeatherIcon style={styles.icon} name="briefcase" size={64} color={COLORS.LIGHT_RED} />
    )}
    <Text style={[styles.title, globalStyle.primaryText]}>{title}</Text>
  </View>
);

export default Header;
