import React from 'react';
import {View, Text, Pressable} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

import Button from '../../../../common/Button';
import Input from '../../../../common/Input';

const SignIn = ({
  theme,
  emailValue,
  onChangeEmailValue,
  onChangePasswordValue,
  passwordValue,
  onCreateAccountPress,
  onForgotPasswordPress,
  errorDescription,
  isEmailValid,
  isPasswordValid,
  navigateToDashboard,
}) => (
  <>
    <View style={styles.signInFormLabelContainer}>
      <Text style={[styles.formLabel, theme.titleText]}>{'Sign In'}</Text>
    </View>
    <Input
      keyboardType={'email-address'}
      onChangeText={onChangeEmailValue}
      placeholder={'Email Address'}
      showError={!isEmailValid}
      value={emailValue}
      viewStyle={styles.emailInputContainer}
      theme={theme}
    />
    <Input
      onChangeText={onChangePasswordValue}
      placeholder={'Password'}
      secureTextEntry
      showError={!isPasswordValid}
      value={passwordValue}
      theme={theme}
    />
    {errorDescription ? (
      <View style={styles.errorDescriptionContainer}>
        <Text style={[styles.linkErrorText, theme.inputTextError]}>
          {errorDescription}
        </Text>
      </View>
    ) : null}
    <Pressable
      onPress={onForgotPasswordPress}
      style={styles.forgotPasswordLinkContainer}>
      <Text style={[styles.forgotPasswordLinkText, theme.inputText]}>
        {'Forgot Password?'}
      </Text>
    </Pressable>
    <Button
      onPress={navigateToDashboard}
      title={'Sign In'}
      viewStyle={styles.signInButtonContainer}
      theme={theme}
    />
    <Pressable
      onPress={onCreateAccountPress}
      style={styles.createAccountLinkContainer}>
      <Text style={[styles.createAccountLinkText, theme.inputText]}>
        {'Create Account'}
      </Text>
    </Pressable>
  </>
);

SignIn.propTypes = {
  emailValue: PropTypes.string,
  errorDescription: PropTypes.string,
  isEmailValid: PropTypes.bool,
  isPasswordValid: PropTypes.bool,
  onChangeEmailValue: PropTypes.func,
  onChangePasswordValue: PropTypes.func,
  onCreateAccountPress: PropTypes.func,
  onForgotPasswordPress: PropTypes.func,
  onSignInPress: PropTypes.func,
  passwordValue: PropTypes.string,
  theme: PropTypes.shape({
    inputText: PropTypes.object,
    inputTextError: PropTypes.object,
    titleText: PropTypes.object,
  }),
};

SignIn.defaultProps = {
  emailValue: '',
  errorDescription: '',
  isEmailValid: true,
  isPasswordValid: true,
  onChangeEmailValue: () => {},
  onChangePasswordValue: () => {},
  onCreateAccountPress: () => {},
  onForgotPasswordPress: () => {},
  onSignInPress: () => {},
  passwordValue: '',
  theme: {
    inputText: {},
    inputTextError: {},
    titleText: {},
  },
};

export default SignIn;
