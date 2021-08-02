import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { HomePageScreen } from '../screens/HomePageScreen';
import { MovieDescriptionPage } from '../screens/MovieDescriptionPage';

const Stack = createStackNavigator();

export const MoviesStack = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle:{
                backgroundColor: "#333"
            }
        }}>
            <Stack.Screen name="Home" component={HomePageScreen}/>
            <Stack.Screen name="MovieDescription" component={MovieDescriptionPage}/>
        </Stack.Navigator>
    )
}
