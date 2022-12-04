import { StyleSheet } from 'react-native';

import { COLORS } from 'src/app/colors';

export const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    paddingBottom: 6,
  },
  activeLabel: {
    color: COLORS.SECONDARY_RED,
    fontWeight: 'bold',
  },
  inactiveLabel: {
    color: COLORS.DARKER_GREY,
    fontWeight: 'normal',
  },
  tabBar: {
    paddingVertical: 5,
    backgroundColor: 'white',
    position: 'absolute',
    height: 100,
  },
});
