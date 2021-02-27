import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Navigation from '../services/navigation';
import useTheme from '../../src/common/Theme/useTheme';
import AuthenticationNavigator from './AuthenticationNavigator';
import DashboardNavigator from './DashboardNavigator';

const RootStack = createStackNavigator();

const NavigationProvider = (props) => {
  const theme = useTheme();

  return (
    <NavigationContainer
      ref={(ref) => Navigation.setTopLevelNavigator(ref)}
      theme={theme.navigationTheme}>
      <RootStack.Navigator
        headerMode={'screen'}
        initialRouteName={props.token ? 'Dashboard' : 'Authentication'}>
        <RootStack.Screen
          component={AuthenticationNavigator}
          name="Authentication"
          options={{animationTypeForReplace: 'pop', headerShown: false}}
        />
        <RootStack.Screen
          component={DashboardNavigator}
          name="Dashboard"
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationProvider;
