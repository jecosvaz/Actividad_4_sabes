import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
const Login = () => {
  const navigation = useNavigation();  
  return (
        <View style={styles.container}>
          <Image
            source={{
              uri:'https://extensionuniversitaria.sabes.edu.mx/pluginfile.php/1/theme_klass/footerlogo/1608150783/logoFoot.png'}}
            style={styles.image}
          />
          <Text style={styles.title}>Bienvenidos</Text>
            <View >
              <Text style={styles.titleDos}>Escribe tu nombre</Text>
              <TextInput style={styles.input}/>
              <Text style={styles.titleDos}>Escribe tu contraseña</Text>
              <TextInput style={styles.input}/>
              <View style={styles.MarginButton}>
              <Button
              onPress={()=> navigation.navigate('Principal')}
              title="Ingresar"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
              />
              </View>
            </View>
          </View>
      );
    }
    //Stilos de fondo y letras
    const styles = StyleSheet.create({
      container: { flex: 1, 
                   backgroundColor: '#FF7043', 
                   alignItems: 'center',
                   justifyContent: 'center',
                 },
      title: {fontSize: 30,color: '#fff'},
      titleDos: {fontSize:15, color: '#fff'},
      image: {height:100, width:300, marginTop:12,},
      input: {borderRadius:12,
              borderWidth:4,
              borderColor:'#777',
              padding: 6,
              margin: 10,
              width: 300,
              backgroundColor:'#fff'},
      MarginButton:{marginTop:15,},
    });
export default Login

