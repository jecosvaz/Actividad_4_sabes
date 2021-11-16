import React,{useEffect, useState}from 'react'
import { View, Text,ScrollView, Button } from 'react-native'
import firebase from '../../DataBase/firebase'

const ScreenUserList = (props) => {
    //Constante para usar los datos guardados en firebase
    const [users, setUsers] = useState([]);
    //Manda a llamar la ejecucion de firebase
    useEffect(()=>{
        firebase.db.collection('users').onSnapshot(querySnapshot => {
            const users = [];
            querySnapshot.docs.forEach((doc) =>{
                const{name, email, phone, address} = doc.data();
                users.push({
                    id: doc.id,
                    name,
                    email,
                    phone,
                    address
                });
            });
            //Muestra los usuarios en la interface
            console.log(users);
            setUsers(users);
        });

    },[]);

    return (
        <ScrollView>
            <Button
            title='Crear usuario'
            onPress={() => props.navigation.navigate('CreateUserScreen')}/>
        </ScrollView>
    )
}

export default ScreenUserList
