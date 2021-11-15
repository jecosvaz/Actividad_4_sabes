import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import CreateUserScreen from '../Screens/CreateUserScreen';



const DirectoryStackScreen = () => {
    const DirectoryStack=createNativeStackNavigator ();
    return (
        <NavigationContainer>
            <DirectoryStack.Navigator>
                <DirectoryStack.Screen name= 'CreateUserScreen' component = {CreateUserScreen}/>
            </DirectoryStack.Navigator>
        </NavigationContainer>
    )
}

export default DirectoryStackScreen
