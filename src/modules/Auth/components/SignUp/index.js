import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import styles from './styles';

import Input from '../../../../common/Input';
import Button from '../../../../common/Button';

const SignUp = ({
  emailValue,
  errorDescription,
  firstNameValue,
  isFirstNameValid,
  isLastNameValid,
  isEmailValid,
  isPasswordValid,
  isPasswordConfirmValid,
  lastNameValue,
  onChangeEmailValue,
  onChangeFirstNameValue,
  onChangeLastNameValue,
  onChangePasswordConfirmValue,
  onChangePasswordValue,
  passwordConfirmValue,
  passwordPolicy,
  passwordValue,
  onSignInPress,
  onSignUpPress,
  theme,
}) => (
  <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
    <View style={styles.formLabelContainer}>
      <Text style={[styles.formLabel, theme.titleText]}>{'Sign Up'}</Text>
    </View>
    <Input
      onChangeText={onChangeFirstNameValue}
      placeholder={'First Name'}
      showError={!isFirstNameValid}
      value={firstNameValue}
      viewStyle={styles.signUpInputContainer}
    />
    <Input
      onChangeText={onChangeLastNameValue}
      placeholder={'Last Name'}
      showError={!isLastNameValid}
      value={lastNameValue}
      viewStyle={styles.signUpInputContainer}
    />
    <Input
      keyboardType={'email-address'}
      onChangeText={onChangeEmailValue}
      placeholder={'Email Address'}
      showError={!isEmailValid}
      value={emailValue}
      viewStyle={styles.signUpInputContainer}
    />
    <Input
      onChangeText={onChangePasswordValue}
      placeholder={'Password'}
      secureTextEntry
      showError={!isPasswordValid}
      value={passwordValue}
      viewStyle={styles.signUpInputContainer}
    />
    <Input
      onChangeText={onChangePasswordConfirmValue}
      placeholder={'Confirm Password'}
      secureTextEntry
      showError={!isPasswordConfirmValid}
      value={passwordConfirmValue}
      viewStyle={styles.signUpInputContainer}
    />

    {errorDescription ? (
      <View style={styles.errorDescriptionContainer}>
        <Text style={[styles.linkErrorText, theme.inputTextError]}>
          {errorDescription}
        </Text>
      </View>
    ) : null}
    {passwordPolicy ? (
      <View style={styles.errorPasswordDescriptionContainer}>
        <Text style={[styles.linkErrorText, theme.inputTextError]}>
          {passwordPolicy}
        </Text>
      </View>
    ) : null}
    <Button
      onPress={onSignUpPress}
      title={'Sign Up'}
      viewStyle={styles.signUpButtonContainer}
    />
    <Pressable onPress={onSignInPress} style={styles.linkButtonContainer}>
      <Text style={[styles.linkButtonText, theme.inputText]}>{'Sign In'}</Text>
    </Pressable>
  </ScrollView>
);

SignUp.propTypes = {
  emailValue: PropTypes.string,
  errorDescription: PropTypes.string,
  firstNameValue: PropTypes.string,
  isEmailValid: PropTypes.bool,
  isFirstNameValid: PropTypes.bool,
  isLastNameValid: PropTypes.bool,
  isLegalAgreed: PropTypes.bool,
  isLegalValid: PropTypes.bool,
  isPasswordConfirmValid: PropTypes.bool,
  isPasswordValid: PropTypes.bool,
  lastNameValue: PropTypes.string,
  onChangeEmailValue: PropTypes.func,
  onChangeFirstNameValue: PropTypes.func,
  onChangeLastNameValue: PropTypes.func,
  onChangePasswordConfirmValue: PropTypes.func,
  onChangePasswordValue: PropTypes.func,
  onLegalCheckboxPress: PropTypes.func,
  onLegalPress: PropTypes.func,
  onSignInPress: PropTypes.func,
  onSignUpPress: PropTypes.func,
  passwordConfirmValue: PropTypes.string,
  passwordPolicy: PropTypes.string,
  passwordValue: PropTypes.string,
  theme: PropTypes.shape({
    inputText: PropTypes.object,
    inputTextError: PropTypes.object,
    titleText: PropTypes.object,
  }),
};

SignUp.defaultProps = {
  emailValue: '',
  errorDescription: '',
  firstNameValue: '',
  isEmailValid: true,
  isFirstNameValid: true,
  isLastNameValid: true,
  isLegalAgreed: false,
  isLegalValid: true,
  isPasswordConfirmValid: true,
  isPasswordValid: true,
  lastNameValue: '',
  onChangeEmailValue: () => {},
  onChangeFirstNameValue: () => {},
  onChangeLastNameValue: () => {},
  onChangePasswordConfirmValue: () => {},
  onChangePasswordValue: () => {},
  onLegalCheckboxPress: () => {},
  onLegalPress: () => {},
  onSignInPress: () => {},
  onSignUpPress: () => {},
  passwordConfirmValue: '',
  passwordPolicy: '',
  passwordValue: '',
  theme: {
    inputText: {},
    inputTextError: {},
    titleText: {},
  },
};

export default SignUp;
