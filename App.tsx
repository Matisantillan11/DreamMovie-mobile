import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { MoviesStack } from './src/stacks/MoviesStack';

 
export const App = () => {
  return(
    <NavigationContainer>
      <MoviesStack />
    </NavigationContainer>
  )
}