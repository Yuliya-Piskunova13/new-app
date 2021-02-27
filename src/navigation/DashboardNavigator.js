import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DashboardContainer from '../modules/Dashboard/containers/DashbordContainer';
const DashbordStack = createStackNavigator();

const DashbordNavigator = () => (
  <DashbordStack.Navigator headerMode={'screen'} initialRouteName={'Dashbord'}>
    <DashbordStack.Screen
      component={DashboardContainer}
      name="Dashbord"
      options={{animationTypeForReplace: 'pop', headerShown: false}}
    />
  </DashbordStack.Navigator>
);

export default DashbordNavigator;
