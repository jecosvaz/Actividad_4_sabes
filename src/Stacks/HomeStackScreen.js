import React from 'react'
import { View, Text } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from '../Screens/Login';
import Principal from '../Screens/Principal';
import { NavigationContainer } from '@react-navigation/native';

const HomeStackScreen = () => {
    const HomeStack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <HomeStack.Navigator>
                <HomeStack.Screen name = 'Login' component={Login}/>
                <HomeStack.Screen name = 'Principal' component={Principal}/>
            </HomeStack.Navigator>
        </NavigationContainer>
    )
}

export default HomeStackScreen
