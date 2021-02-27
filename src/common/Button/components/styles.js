import {StyleSheet} from 'react-native';

const buttonStyles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonContent: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  buttonText: {},
  leftContainer: {
    left: 16,
    position: 'absolute',
  },
  rightContainer: {
    position: 'absolute',
    right: 16,
  },
});

export default buttonStyles;
