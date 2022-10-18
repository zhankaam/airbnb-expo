import { StyleSheet } from 'react-native';

import { COLORS } from '../colors';

const globalStyle = StyleSheet.create({
  text: {
    color: COLORS.WHITE,
    fontFamily: 'PingFangHK-Regular',
  },
  primaryText: {
    fontFamily: 'PingFangHK-Regular',
    fontWeight: '700',
  },
});

export default globalStyle;
