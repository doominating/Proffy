import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Landing from '../pages/Landing';
import Teach from '../pages/Teach';
import LearnTabs from './LearnTabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Landing' component={Landing} />
        <Screen name='Teach' component={Teach} />
        <Screen name='Learn' component={LearnTabs} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
