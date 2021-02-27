import React, {useState, useCallback} from 'react';
import {ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';

import Input from '../components';

const InputContainer = ({viewStyle, showError, theme, ...props}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Input
      onBlur={onBlur}
      onFocus={onFocus}
      {...props}
      theme={theme}
      isFocused={isFocused}
      showError={showError}
      viewStyle={viewStyle}
    />
  );
};

InputContainer.propTypes = {
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  showError: PropTypes.bool,
  value: PropTypes.string,
  viewStyle: ViewPropTypes.style,
};

InputContainer.defaultProps = {
  keyboardType: 'default',
  onChangeText: () => {},
  placeholder: '',
  secureTextEntry: false,
  showError: false,
  value: '',
  viewStyle: {},
};

export default InputContainer;
