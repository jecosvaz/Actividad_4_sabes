import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeStackScreen from './HomeStackScreen';
import DirectoryStackScreen from './DirectoryStackScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const NavigationTabs = () => {

    const MyTabs = createBottomTabNavigator()
    return (
        <NavigationContainer>
            <MyTabs.Navigator screenOptions ={{headerShown:false}}>
                <MyTabs.Screen
                    name='Home'
                    component={HomeStackScreen}
                    options={{
                        tabBarLabel: 'Principal',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }} />
                <MyTabs.Screen
                    name='DirectoryStack'
                    component={DirectoryStackScreen}
                    options={{
                        tabBarLabel: 'Directorio',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account" color={color} size={size} />
                        ),
                    }} />
            </MyTabs.Navigator>
        </NavigationContainer>
    )
}

export default NavigationTabs
