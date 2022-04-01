import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from '../styles/colors';
import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';

const stackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <stackRoutes.Navigator
      initialRouteName='Welcome'
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white
        }
      }}
    >
      <stackRoutes.Screen
        name='Welcome'
        component={Welcome}
      />

      <stackRoutes.Screen
        name='UserIdentification'
        component={UserIdentification}
      />

      <stackRoutes.Screen
        name='Confirmation'
        component={Confirmation}
      />
    </stackRoutes.Navigator>
  </NavigationContainer>
)
export default AppRoutes;