import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import CreateUserScreen from '../Screens/CreateUserScreen';
import ScreenUserList from '../Screens/ScreenUserList';
import UserDetailsScreen from '../Screens/UserDetailsScreen';



const DirectoryStackScreen = () => {
    const DirectoryStack=createNativeStackNavigator ();
    return (
        <NavigationContainer>
            <DirectoryStack.Navigator>
                <DirectoryStack.Screen name='ScreenUserList' component = {ScreenUserList} options={{title: 'Directorio'}}/>
                <DirectoryStack.Screen name= 'CreateUserScreen' component = {CreateUserScreen} options={{title: 'Crear nuevo contacto'}}/>
                <DirectoryStack.Screen name= 'UserDetailsScreen' component = {UserDetailsScreen} options={{title: 'Modificar contacto'}}/>
            </DirectoryStack.Navigator>
        </NavigationContainer>
    )
}

export default DirectoryStackScreen
