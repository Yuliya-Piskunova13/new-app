import React from 'react';
import {Text, ViewPropTypes, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import styles from './styles';

const Button = ({
  disabled,
  viewStyle,
  contentViewStyle,
  textStyle,
  title,
  theme,
  onPress,
  left,
  right,
}) => (
  <View style={[styles.buttonContainer, viewStyle]}>
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.buttonContent, theme.buttonBackground, contentViewStyle]}>
      {left ? <View style={styles.leftContainer}>{left}</View> : null}
      {title ? (
        <Text style={[styles.buttonText, theme.containerText, textStyle]}>
          {title}
        </Text>
      ) : null}
      {right ? <View style={styles.rightContainer}>{right}</View> : null}
    </TouchableOpacity>
  </View>
);

Button.propTypes = {
  contentViewStyle: ViewPropTypes.style,
  disabled: PropTypes.bool,
  left: PropTypes.node,
  onPress: PropTypes.func,
  right: PropTypes.node,
  textStyle: Text.propTypes.style,
  theme: PropTypes.shape({
    buttonBackground: PropTypes.object,
    containerText: PropTypes.object,
  }),
  title: PropTypes.string,
  viewStyle: ViewPropTypes.style,
};

Button.defaultProps = {
  contentViewStyle: {},
  disabled: false,
  left: null,
  onPress: () => {},
  right: null,
  textStyle: {},
  theme: {
    buttonBackground: {},
    containerText: {},
  },
  title: '',
  viewStyle: {},
};

export default Button;
