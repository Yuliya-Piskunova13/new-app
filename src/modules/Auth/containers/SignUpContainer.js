import React, {useState, useCallback} from 'react';
import {LayoutAnimation} from 'react-native';
import PropTypes from 'prop-types';

import useTheme from '../../../common/Theme/useTheme';

import SignUp from '../components/SignUp';

const SignUpContainer = ({onSignInPress}) => {
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordConfirmValue, setPasswordConfirmValue] = useState('');
  const [passwordPolicy, setPasswordPolicy] = useState('');
  const [errorDescription, setErrorDescription] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [isLegalAgreed, setIsLegalAgreed] = useState(false);
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordConfirmValid, setIsPasswordConfirmValid] = useState(true);
  const [isLegalValid, setIsLegalValid] = useState(true);

  const theme = useTheme();

  const cleanIndications = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setErrorDescription('');
    setPasswordPolicy('');
    setIsFirstNameValid(true);
    setIsLastNameValid(true);
    setIsEmailValid(true);
    setIsPasswordValid(true);
    setIsPasswordConfirmValid(true);
    setIsLegalValid(true);
  };

  const onChangeFirstNameValue = useCallback((value) => {
    setFirstNameValue(value);
    cleanIndications();
  }, []);

  const onChangeLastNameValue = useCallback((value) => {
    setLastNameValue(value);
    cleanIndications();
  }, []);

  const onChangeEmailValue = useCallback((value) => {
    setEmailValue(value);
    cleanIndications();
  }, []);

  const onChangePasswordValue = useCallback((value) => {
    setPasswordValue(value);
    cleanIndications();
  }, []);

  const onChangePasswordConfirmValue = useCallback((value) => {
    setPasswordConfirmValue(value);
    cleanIndications();
  }, []);

  const onSignUpPress = useCallback(() => {}, []);

  return (
    <SignUp
      emailValue={emailValue}
      errorDescription={errorDescription}
      firstNameValue={firstNameValue}
      isEmailValid={isEmailValid}
      isFirstNameValid={isFirstNameValid}
      isLastNameValid={isLastNameValid}
      isLegalAgreed={isLegalAgreed}
      isLegalValid={isLegalValid}
      isPasswordConfirmValid={isPasswordConfirmValid}
      isPasswordValid={isPasswordValid}
      lastNameValue={lastNameValue}
      onChangeEmailValue={onChangeEmailValue}
      onChangeFirstNameValue={onChangeFirstNameValue}
      onChangeLastNameValue={onChangeLastNameValue}
      onChangePasswordConfirmValue={onChangePasswordConfirmValue}
      onChangePasswordValue={onChangePasswordValue}
      onSignInPress={onSignInPress}
      onSignUpPress={onSignUpPress}
      passwordConfirmValue={passwordConfirmValue}
      passwordPolicy={passwordPolicy}
      passwordValue={passwordValue}
      theme={theme}
    />
  );
};

SignUpContainer.propTypes = {
  onSignInPress: PropTypes.func,
};

SignUpContainer.defaultProps = {
  onSignInPress: () => {},
};

export default SignUpContainer;
