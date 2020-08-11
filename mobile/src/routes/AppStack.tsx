import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Landing from '../pages/Landing';
import Teach from '../pages/Teach';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Landing' component={Landing} />
        <Screen name='Teach' component={Teach} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
