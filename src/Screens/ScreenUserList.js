import React,{useEffect, useState}from 'react'
import { ScrollView, Button } from 'react-native'
import firebase from '../../DataBase/firebase'
import { ListItem, Avatar } from 'react-native-elements'

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
    //Pinta los usuarios con los datos
    return (
        <ScrollView>
            {/* Bonton para ir a la venta de creacion de usuarios */}
            <Button
            title='Crear usuario'
            onPress={() => props.navigation.navigate('CreateUserScreen')}
            />
            {/* Trae los datos de la base de datos y los muestra en la pantalla */}
            {users.map(user=>{
                return(
                    <ListItem
                        key={user.id}
                        bottomDivider
                        onPress={()=> alert(user.id)}
                    >
                      <ListItem.Chevron/>
                      <Avatar 
                        source={{uri:'https://c.tenor.com/G9QKHLC9HvEAAAAM/grand-m-grand-oficel.gif'
                        }}
                        rounded
                        />
                      <ListItem.Content>
                          <ListItem.Title>{user.name}</ListItem.Title>
                          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                          <ListItem.Subtitle>{user.phone}</ListItem.Subtitle>
                          <ListItem.Subtitle>{user.address}</ListItem.Subtitle>
                      </ListItem.Content>
                    </ListItem>
                )
            })
            }
        </ScrollView>
    
    )
}

export default ScreenUserList
