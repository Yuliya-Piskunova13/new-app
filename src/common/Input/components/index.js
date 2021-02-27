import React from 'react';
import {View, TextInput, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Input = ({
  onFocus,
  onBlur,
  isFocused,
  showError,
  viewStyle,
  theme,
  ...props
}) => (
  <View
    style={[
      styles.inputContainer,
      theme.inputContainer,
      isFocused ? theme.inputContainerFocused : {},
      showError ? theme.inputContainerError : {},
      viewStyle,
    ]}>
    <TextInput
      autoCapitalize={'none'}
      autoCorrect={false}
      hitSlop={{bottom: 15, left: 15, right: 15, top: 15}}
      onBlur={onBlur}
      onFocus={onFocus}
      placeholderTextColor={theme.inputPlaceholderColor}
      style={[
        styles.inputText,
        theme.inputText,
        showError ? theme.inputTextError : {},
      ]}
      {...props}
    />
  </View>
);
Input.propTypes = {
  isFocused: PropTypes.bool,
  keyboardType: PropTypes.string,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  showError: PropTypes.bool,
  theme: PropTypes.shape({
    inputContainer: PropTypes.object,
    inputContainerError: PropTypes.object,
    inputContainerFocused: PropTypes.object,
    inputPlaceholderColor: PropTypes.string,
    inputText: PropTypes.object,
    inputTextError: PropTypes.object,
  }),
  value: PropTypes.string,
  viewStyle: ViewPropTypes.style,
};

Input.defaultProps = {
  isFocused: false,
  keyboardType: 'default',
  onBlur: () => {},
  onChangeText: () => {},
  onFocus: () => {},
  placeholder: '',
  secureTextEntry: false,
  showError: false,
  theme: {
    inputContainer: {},
    inputContainerError: {},
    inputContainerFocused: {},
    inputPlaceholderColor: 'black',
    inputText: {},
    inputTextError: {},
  },
  value: '',
  viewStyle: {},
};

export default Input;
