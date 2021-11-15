import React,{useState} from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native'

const CreateUserScreen = () => {
    //Guarda los estados de los textinputs
    const[state,setState]=useState({
        name: "",
        email:"",
        phone:"",
        address:""
    });

    //Funcion para remplazar los campos de los inputs
    const handleChangeText = (name, value) =>{
        setState({ ...state,[name]: value});
    };
    //Pinta el formulario
    return (
     <ScrollView style={styles.container}>
         <View style={styles.inputGroup}>
             <TextInput placeholder="Nombre de la persona" 
             onChangeText={(value)=> handleChangeText('name',value)}/>
         </View>
         <View style={styles.inputGroup}>
             <TextInput placeholder="Correo electronico de la persona"
             onChangeText={(value)=> handleChangeText( 'email', value)}/>
         </View>
         <View style={styles.inputGroup}>
             <TextInput placeholder="Teléfono de la pesona"
             onChangeText={(value)=> handleChangeText( 'phone', value)}/>
         </View>
         <View style={styles.inputGroup}>
             <TextInput placeholder="Dirección de la persona"
             onChangeText={(value)=> handleChangeText( 'address', value)}/>
         </View> 
         <View>
             <Button title='Guardar' onPress={() => console.log(state)}/>
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

export default CreateUserScreen
