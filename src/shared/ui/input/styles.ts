import { StyleSheet } from 'react-native';

import { COLORS } from 'src/app/colors';

const styles = StyleSheet.create({
  base: {
    width: 300,
    margin: 10,
    padding: 20,
    borderRadius: 50,
    borderWidth: 1,
    fontSize: 16,
  },
  main: {
    borderColor: COLORS.SECONDARY_GREY,
  },
  error: {
    borderColor: COLORS.LIGHT_RED,
  },
});

export default styles;
