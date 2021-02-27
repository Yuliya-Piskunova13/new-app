import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, KeyboardAvoidingView, Platform} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import LoginBackground from '../../../../assets/images/sun.jpg';
import styles from './styles';
import SignInContainer from '../../containers/SignInContainer';
import SignUpContainer from '../../containers/SignUpContainer';

const Login = ({
  currentScreen,
  navigateToResetPassword,
  navigateToSignIn,
  navigateToSignUp,
  navigateToDashboard,
  theme,
  posts,
}) => (
  <View style={[styles.screenContainer, theme.screenBackground]}>
    <Image
      resizeMode={'cover'}
      source={LoginBackground}
      style={styles.backgroundImageContainer}
    />
    <View style={styles.contentContainer}>
      <View style={styles.logoContainer} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={[styles.formContainer, theme.authenticationFormContainer]}>
        <SafeAreaView>
          {currentScreen === 'SignIn' ? (
            <SignInContainer
              onCreateAccountPress={navigateToSignUp}
              onForgotPasswordPress={navigateToResetPassword}
              navigateToDashboard={navigateToDashboard}
              posts={posts}
            />
          ) : null}
          {currentScreen === 'SignUp' ? (
            <SignUpContainer onSignInPress={navigateToSignIn} />
          ) : null}
        </SafeAreaView>
      </KeyboardAvoidingView>
    </View>
  </View>
);

Login.propTypes = {
  currentScreen: PropTypes.string,
  navigateToResetPassword: PropTypes.func,
  navigateToSignIn: PropTypes.func,
  navigateToSignUp: PropTypes.func,
  theme: PropTypes.shape({
    authenticationFormContainer: PropTypes.object,
    screenBackground: PropTypes.object,
  }),
};

Login.defaultProps = {
  currentScreen: 'SignIn',
  navigateToResetPassword: () => {},
  navigateToSignIn: () => {},
  navigateToSignUp: () => {},
  theme: {
    authenticationFormContainer: {},
    screenBackground: {},
  },
};

export default Login;
