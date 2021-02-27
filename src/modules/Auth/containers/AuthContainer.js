import React, {useState, useCallback} from 'react';
import {LayoutAnimation} from 'react-native';

import Login from '../components/Login';
import useTheme from '../../../common/Theme/useTheme';
import navigation from '../../../services/navigation';
import {login} from '../services';

const AuthContainer = () => {
  const [currentScreen, setCurrentScreen] = useState('SignIn');

  const theme = useTheme();

  const navigateToResetPassword = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCurrentScreen('ResetPassword');
  }, []);

  const navigateToSignUp = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCurrentScreen('SignUp');
  }, []);

  const navigateToSignIn = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCurrentScreen('SignIn');
  }, []);

  const navigateToDashboard = useCallback(() => {
    login()
      .then((res) => navigation.navigate('Dashboard', {posts: res}))
      // eslint-disable-next-line no-alert
      .catch(() => alert('Something wrong'));
  }, []);

  return (
    <Login
      currentScreen={currentScreen}
      navigateToResetPassword={navigateToResetPassword}
      navigateToSignIn={navigateToSignIn}
      navigateToSignUp={navigateToSignUp}
      navigateToDashboard={navigateToDashboard}
      theme={theme}
    />
  );
};

export default AuthContainer;
