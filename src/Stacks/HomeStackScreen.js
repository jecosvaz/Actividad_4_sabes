import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Screens/Login';
import Principal from '../Screens/Principal';
import { NavigationContainer } from '@react-navigation/native';
import Camara from '../Screens/Camara';

const HomeStackScreen = () => {
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator >
                <HomeStack.Screen  name='Login' component={Login} options={{ title: false }} />
                <HomeStack.Screen name='Principal' component={Principal} options={{ title: 'Bienvenido' }}/>
                <HomeStack.Screen name='Camara' component={Camara} options={{ title: false }}/>
            </HomeStack.Navigator>
    )
        

            
        
        
    }

export default HomeStackScreen
