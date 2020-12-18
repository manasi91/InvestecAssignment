
import React from 'react';
import { Text } from 'react-native';

import ButtonsScreen from "../components/ButtonsScreen";
import Welcome from "../components/Welcome";
import Home from "../components/Home";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const AppNavigator = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{
                headerShown: false
            }} />
             <Stack.Screen name="Home" component={Home} options={{
                headerShown: true
            }} />
            <Stack.Screen name="ButtonsScreen" component={ButtonsScreen} options={{
                headerShown: true
            }} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default AppNavigator;



