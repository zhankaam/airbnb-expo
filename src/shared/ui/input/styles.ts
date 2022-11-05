import { StyleSheet } from 'react-native';

import { COLORS } from 'src/app/colors';

const styles = StyleSheet.create({
  base: {
    margin: 10,
    padding: 20,
    borderRadius: 50,
    borderWidth: 1,
    fontSize: 16,
    width: '90%',
  },
  main: {
    borderColor: COLORS.SECONDARY_GREY,
  },
  error: {
    borderColor: COLORS.LIGHT_RED,
  },
  errorText: {
    color: COLORS.LIGHT_RED,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
});

export default styles;
