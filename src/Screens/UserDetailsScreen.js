import React, {useEffect, useState} from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet, ActivityIndicator,Alert } from 'react-native'
import firebase from '../../DataBase/firebase'

const UserDetailsScreen = (props) => {
    const initialState={
        id:'',
        name: '',
        mail: '',
        phone:'',
        address: ''
    }
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    //Realizamos la consulta a la base de datos para extraer los datos
    const getUserById = async (id)=>{ 
        const dbRef = firebase.db.collection('users').doc(id);
        const doc = await dbRef.get();
        const user = doc.data();
        setUser({
            ...user,
            id:doc.id

        });
        setLoading(false);        
    };

    useEffect(()=>{
        getUserById(props.route.params.userId)
    },[]);
    const handleChangeText = (name, value) =>{
        setUser({ ...user,[name]: value});
    };

    const deleteUser= async ()=> {
        const dbRef= firebase.db.collection('users').doc(props.route.params.userId);
        await dbRef.delete();
        props.navigation.navigate('ScreenUserList');
    };

    const updateUser = async() =>{
        const dbRef = firebase.db.collection('users').doc(user.id);
        await dbRef.set({
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address
        });
        setUser({initialState})
        props.navigation.navigate('ScreenUserList');
    }

    const openConfirmationAlert = () => {
        Alert.alert(
          "Removing the User",
          "Are you sure?",
          [
            { text: "Yes", onPress: () => deleteUser() },
            { text: "No", onPress: () => console.log("canceled") },
          ],
          {
            cancelable: true,
          }
        );
      };

    if(loading){
        return(
            <View>
                <ActivityIndicator size='large' color='#6495ED'/>
            </View>
        )
    }
    //Pinta el formulario
    return (
        <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
            <TextInput placeholder="Nombre de la persona"
            value={user.name} 
            onChangeText={(value)=> handleChangeText('name',value)}/>
        </View>
        <View style={styles.inputGroup}>
            <TextInput placeholder="Correo electronico de la persona"
            value={user.email}
            onChangeText={(value)=> handleChangeText( 'email', value)}/>
        </View>
        <View style={styles.inputGroup}>
            <TextInput placeholder="Teléfono de la pesona"
            value={user.phone}
            onChangeText={(value)=> handleChangeText( 'phone', value)}/>
        </View>
        <View style={styles.inputGroup}>
            <TextInput placeholder="Dirección de la persona"
            value={user.address}
            onChangeText={(value)=> handleChangeText( 'address', value)}/>
        </View> 
        <View>
            <Button 
            color='#9CCC65'
            title='Actualizar contacto' onPress={() => updateUser()}/>
        </View>
        <View>
            <Button 
            color='#EF5350'
            title='Borrar contacto' onPress={() => openConfirmationAlert()}/>
        </View>
    </ScrollView>
   )
}
//Estilos para el formulario
const styles = StyleSheet.create({
   container:{
       flex: 1,
       padding:35,
   },
   inputGroup:{
       flex: 1,
       padding: 0,
       marginBottom: 15,
       borderBottomWidth: 1,
       borderBottomColor: '#cccccc',

   },
})
    


export default UserDetailsScreen
