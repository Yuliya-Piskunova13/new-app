import React from 'react';
import {ViewPropTypes, Text} from 'react-native';
import PropTypes from 'prop-types';

import Button from '../components';

const ButtonContainer = ({
  viewStyle,
  title,
  onPress,
  textStyle,
  left,
  right,
  disabled,
  contentViewStyle,
  theme,
}) => {
  return (
    <Button
      contentViewStyle={contentViewStyle}
      disabled={disabled}
      left={left}
      onPress={onPress}
      right={right}
      textStyle={textStyle}
      theme={theme}
      title={title}
      viewStyle={viewStyle}
    />
  );
};

ButtonContainer.propTypes = {
  contentViewStyle: ViewPropTypes.style,
  disabled: PropTypes.bool,
  left: PropTypes.node,
  onPress: PropTypes.func,
  right: PropTypes.node,
  textStyle: Text.propTypes.style,
  title: PropTypes.string,
  viewStyle: ViewPropTypes.style,
};

ButtonContainer.defaultProps = {
  contentViewStyle: {},
  disabled: false,
  left: null,
  onPress: () => {},
  right: null,
  textStyle: {},
  title: '',
  viewStyle: {},
};

export default ButtonContainer;
