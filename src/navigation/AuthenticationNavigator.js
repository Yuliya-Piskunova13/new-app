import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthContainer from '../modules/Auth';
const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator
    headerMode={'screen'}
    initialRouteName={'Auth'}>
    <AuthenticationStack.Screen
      component={AuthContainer}
      name="Auth"
      options={{animationTypeForReplace: 'pop', headerShown: false}}
    />
  </AuthenticationStack.Navigator>
);

export default AuthenticationNavigator;
