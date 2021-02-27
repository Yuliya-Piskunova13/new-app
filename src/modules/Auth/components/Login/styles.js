import {StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create({
  backgroundImageContainer: {
    aspectRatio: 0.73,
    height: null,
    position: 'absolute',
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  formContainer: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  logoContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  screenContainer: {
    flex: 1,
  },
});

export default loginStyles;
