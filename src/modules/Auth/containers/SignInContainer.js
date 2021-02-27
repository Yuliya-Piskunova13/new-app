import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {LayoutAnimation} from 'react-native';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SignIn from '../components/SignIn';
import {login} from '../services';
import navigation from '../../../services/navigation';

const SignInContainer = ({onCreateAccountPress, navigateToDashboard}) => {
  const dispatch = useDispatch();

  const [emailValue, setEmailValue] = useState();
  const [passwordValue, setPasswordValue] = useState();
  const [errorDescription, setErrorDescription] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const cleanIndications = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setErrorDescription('');
    setIsEmailValid(true);
    setIsPasswordValid(true);
  };

  const setObjectValue = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('key', jsonValue);
    } catch (e) {
      // save error
    }

    console.log('Done.');
  };

  const onChangeEmailValue = useCallback((value) => {
    setEmailValue(value);
    cleanIndications();
  }, []);

  const onChangePasswordValue = useCallback((value) => {
    setPasswordValue(value);
    cleanIndications();
  }, []);

  const onSignInPress = useCallback(() => {
    if (emailValue && passwordValue) {
      setObjectValue({passwordValue, emailValue});
      login()
        .then((res) => navigation.navigate('Dashboard', {posts: res}))
        // eslint-disable-next-line no-alert
        .catch(() => alert('Something wrong'));
    } else {
      // eslint-disable-next-line no-alert
      alert('Check information');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, emailValue, passwordValue]);

  return (
    <SignIn
      emailValue={emailValue}
      errorDescription={errorDescription}
      isEmailValid={isEmailValid}
      isPasswordValid={isPasswordValid}
      onChangeEmailValue={onChangeEmailValue}
      onChangePasswordValue={onChangePasswordValue}
      onCreateAccountPress={onCreateAccountPress}
      onSignInPress={onSignInPress}
      passwordValue={passwordValue}
      navigateToDashboard={onSignInPress}
    />
  );
};

SignInContainer.propTypes = {
  onCreateAccountPress: PropTypes.func,
  onForgotPasswordPress: PropTypes.func,
};

SignInContainer.defaultProps = {
  onCreateAccountPress: () => {},
  onForgotPasswordPress: () => {},
};

export default SignInContainer;
