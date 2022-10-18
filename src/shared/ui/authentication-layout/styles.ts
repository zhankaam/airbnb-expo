import { StyleSheet } from 'react-native';

import { COLORS } from 'src/app/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: 30,
    marginRight: 30,
  },
  section: {
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  icon: {
    marginBottom: 60,
  },
  title: {
    color: COLORS.BLACK,
    fontSize: 25,
  },
  button: {
    width: 300,
    height: 60,
    borderRadius: 50,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
  },
  footerText: {
    color: COLORS.GREY,
    fontSize: 16,
  },
  loginButton: {
    alignSelf: 'center',
  },
  loginButtonText: {
    fontSize: 20,
  },
  error: {
    color: COLORS.LIGHT_RED,
    fontSize: 18,
  },
});

export default styles;
