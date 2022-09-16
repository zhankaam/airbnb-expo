import { Dimensions, StyleSheet } from 'react-native';

import { COLORS } from 'src/app/colors';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  backgroundImage: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: win.width,
    height: win.height,
    color: 'white',
    padding: 37,
    paddingBottom: 60,
    paddingTop: 60,
  },
  top: {
    alignSelf: 'flex-start',
  },
  name: {
    fontWeight: '700',
    fontSize: 34,
    marginBottom: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: '400',
    letterSpacing: 2.6,
    marginBottom: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginBottom: 60,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 50,
    width: 170,
    height: 60,
    marginHorizontal: 8,
  },
  loginButton: {
    backgroundColor: COLORS.LIGHT_RED,
  },
  signUpButtonText: {
    color: COLORS.LIGHT_RED,
    fontSize: 16,
  },
  loginButtonText: {
    fontSize: 16,
  },
  skipButton: {
    alignSelf: 'flex-start',
  },
  skipButtonText: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default styles;
