import {StyleSheet, Platform} from 'react-native';

const inputStyles = StyleSheet.create({
  inputContainer: {
    borderRadius: 8,
    paddingHorizontal: 18,
  },
  inputText: {
    paddingVertical: Platform.OS === 'android' ? 10 : 15,
  },
});

export default inputStyles;
